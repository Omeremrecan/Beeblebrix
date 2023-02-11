import React, { useEffect, useState } from "react";
import AppContext from "../contexts/AppContext";


const AppContextProvider = ({ children }: any) => {
  const [path, setPath] = useState<string>(window.location.pathname);

  console.log(window.location.pathname);

  useEffect(() => {
    if (path !== window.location.pathname){
      /* eslint-disable no-restricted-globals */
      history.replaceState({}, "", path);
    } 
  }, [path]);

  return (
    <AppContext.Provider value={{ path, setPath }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
