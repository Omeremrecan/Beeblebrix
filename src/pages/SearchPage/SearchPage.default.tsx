import { Navbar, PageContainer, Textbox } from "base/dependencies/components";
import useTranslation from "hooks/useTranslation";
import React, { useState } from "react";
import "./SearchPage.default.style.scss"

export const SearchPage = () => {
  const [SearchText, setSearchText] = useState<string>("");
  const [translate] = useTranslation();

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
        </div>
      </PageContainer>
    </>
  );
};
