const express = require("express");
const { faker } = require("@faker-js/faker");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

const users = [
  {
    name: "Admin",
    surname: "",
    username: "admin",
    password: "123456",
  },
];

const categories = [
  { id: "1", name: "SCIENCE_FICTION" },
  { id: "2", name: "FANTASTIC" },
  { id: "3", name: "DRAMA" },
  { id: "4", name: "COMEDY" },
  { id: "5", name: "DOCUMENTARY" },
];

var movies = [];

const isEmpty = (str) => {
  return str == undefined || str == null || str == "";
};

var movieId = 1;
categories.forEach((category) => {
  for (var i = 1; i < 21; i++) {
    movies.push({
      id: movieId++,
      title: faker.word.noun(),
      imgSrc: faker.image.image(),
      categoryId: category.id,
      isFavorite: false,
    });
  }
});

app.get("/movies", (req, res) => {
  const categoryId = req.query.categoryId;
  const searchText = req.query.searchText;

  res.send(
    movies.filter(
      (movie) =>
        (movie.categoryId == categoryId || isEmpty(categoryId)) &&
        (movie.title.includes(searchText) || isEmpty(searchText))
    )
  );
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.post("/security/login", (req, res) => {
  const credential = req.body;
  const user = users.find(
    (user) =>
      user.username == credential.username &&
      user.password == credential.password
  );

  if (user != null && user != undefined) {
    res.send({
      success: true,
      data: {
        username: user.username,
        name: user.name,
        surname: user.surname,
      },
    });
  } else {
    res.send({
      success: false,
    });
  }
});

app.post("/movies/favorites", (req, res) => {
  const id = req.body.id;
  const isFavorite = req.body.isFavorite;

  movies = [
    ...movies.filter((movie) => movie.id != id),
    { ...movies.find((movie) => movie.id == id), isFavorite: isFavorite },
  ].sort((x, y) => (parseInt(x.id) - parseInt(y.id) > 0 ? 1 : -1));

  res.send(movies.filter((x) => x.isFavorite));
});

app.get("/movies/favorites", (req, res) => {
  res.send(movies.filter((x) => x.isFavorite));
});

app.listen(3001);
