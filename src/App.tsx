import React from "react";
import { ErrorPage, HomePage, SearchPage } from "base/dependencies/pages";
import AppContext from "context-api/contexts/AppContext";
import AppContextProvider from "context-api/providers/AppContextProvider";
import { LoginPage } from "pages/LoginPage/LoginPage.default";

const App = () => {
  const getPage = (path: string) => {
    if (path == "/") {
      return <HomePage />;
    } else if (path == "/search") {
      return <SearchPage />;
    } else if (path == "/login") {
      return <LoginPage />;
    } else {
      return <ErrorPage />;
    }
  };

  return (
    <AppContextProvider>
      <AppContext.Consumer>{({ path }) => getPage(path)}</AppContext.Consumer>
    </AppContextProvider>
  );
};

export default App;
