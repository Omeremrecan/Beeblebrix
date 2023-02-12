import {
  Card,
  Collection,
  Navbar,
  PageContainer,
} from "base/dependencies/components";
import { categoryManager, movieManager } from "base/dependencies/managers";
import { Category } from "base/entities/Category";
import { Movie } from "base/entities/Movie";
import { Keys } from "base/localization/Keys";
import AppContext from "context-api/contexts/AppContext";
import requireAuthentication from "hocs/requireAuthentication";
import useTranslation from "hooks/useTranslation";
import React, { useCallback, useEffect, useState } from "react";

const CollectionsByCategory = ({
  category,
  setFavorites,
}: {
  category: Category;
  setFavorites: (movies: Movie[]) => void;
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [translate] = useTranslation();

  useEffect(() => {
    movieManager.getMovies(category.id).then((data) => {
      setMovies([...data]);
    });
  }, [category]);

  return (
    <Collection title={translate(category.name as Keys)}>
      {movies.map((movie) => (
        <>
          <Card
            key={movie.id}
            title={movie.title}
            imgSrc={movie.imgSrc}
            href=""
            isFavorite={movie.isFavorite}
            onFavoriteChange={(isFavorite) => {
              movieManager
                .changeFavorite(movie.id, isFavorite)
                .then((favorites) => {
                  setFavorites(favorites);
                });
            }}
          />
        </>
      ))}
    </Collection>
  );
};

const HomePageComponent = () => {
  const [translate] = useTranslation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);


  useEffect(() => {
    movieManager.getFavorites().then(setFavorites);
    categoryManager.getCategories().then(setCategories);
  }, []);


  return (
    <>
      <Navbar />
      <PageContainer>
        <Collection title="Favoriler">
          {favorites.map((movie) => (
            <AppContext.Consumer>
              {({ setPath, path }) => (
                <Card
                  key={movie.id}
                  title={movie.title}
                  imgSrc={movie.imgSrc}
                  href=""
                  isFavoriteActive={false}
                />
              )}
            </AppContext.Consumer>
          ))}
        </Collection>
        {categories.map((category) => (
          <CollectionsByCategory
            key={category.id}
            category={category}
            setFavorites={setFavorites}
          />
        ))}
      </PageContainer>
    </>
  );
};

export const HomePage = requireAuthentication(HomePageComponent);
