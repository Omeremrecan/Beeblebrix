import React from "react";
import { createContext } from "react";

const AppContext = createContext({
  path: "/",
  setPath: (path: string) => {}
});

export default AppContext;