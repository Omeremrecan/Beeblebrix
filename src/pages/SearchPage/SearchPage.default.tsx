import {
  Button,
  Card,
  Navbar,
  PageContainer,
  Textbox,
} from "base/dependencies/components";
import { movieManager } from "base/dependencies/managers";
import { Movie } from "base/entities/Movie";
import requireAuthentication from "hocs/requireAuthentication";
import useTranslation from "hooks/useTranslation";
import React, { useEffect, useState } from "react";
import "./SearchPage.default.style.scss";

const SearchPageComponent = () => {
  const [SearchText, setSearchText] = useState<string>("");
  const [translate] = useTranslation();
  const [results, setResults] = useState<Movie[]>([]);
  const [showingResultCount, setShowingResultCount] = useState<number>(2);

  useEffect(() => {
    if (SearchText != "") {
      movieManager.searchInMovies(SearchText).then((data) => {
        setResults(data);
      });
    } else {
      setResults([]);
    }
    setShowingResultCount(2);
  }, [SearchText]);

  return (
    <>
      <Navbar />
      <PageContainer>
        <div className="search-page">
          <div className="search-page__search-box">
            <Textbox
              placeholder={translate("SEARCH")}
              value={SearchText}
              onChange={setSearchText}
            />
          </div>
          <div className="search-page__results">
            {results.slice(0, showingResultCount).map((movie) => (
              <Card
                key={movie.id}
                imgSrc={movie.imgSrc}
                title={movie.title}
                href={""}
              />
            ))}
          </div>
          <div className="search-page__result-actions">
            {results.length > showingResultCount ? (
              <Button
                title={translate("GET_MORE")}
                onClick={() => {
                  setShowingResultCount(results.length);
                }}
              />
            ) : null}
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export const SearchPage = requireAuthentication(SearchPageComponent);
