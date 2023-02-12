import {
  Card,
  Navbar,
  PageContainer,
  Textbox,
} from "base/dependencies/components";
import { movieManager } from "base/dependencies/managers";
import { Movie } from "base/entities/Movie";
import useTranslation from "hooks/useTranslation";
import React, { useEffect, useState } from "react";
import "./SearchPage.default.style.scss";

export const SearchPage = () => {
  const [SearchText, setSearchText] = useState<string>("");
  const [translate] = useTranslation();
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {

  }, [SearchText])

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
            {results.map((movie) => (
              <Card
                key={movie.id}
                imgSrc={movie.imgSrc}
                title={movie.title}
                href={""}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </>
  );
};
