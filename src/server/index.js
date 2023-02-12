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

const categories = [
  { id: "1", name: "SCIENCE_FICTION" },
  { id: "2", name: "FANTASTIC" },
  { id: "3", name: "DRAMA" },
  { id: "4", name: "COMEDY" },
  { id: "5", name: "DOCUMENTARY" },
];

const movies = [];

const isEmpty = (str) => {
  return str == undefined || str == null || str == "";
};

categories.forEach((category) => {
  for (var i = 1; i < 21; i++) {
    movies.push({
      id: (category * 20 + i).toString(),
      title: faker.lorem.words(2),
      imgSrc: faker.image.image(),
      categoryId: category.id,
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

app.listen(3001);
