import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import App from "./App";
import { localizationManager } from "base/dependencies/managers";
import en from "base/localization/en";
import tr from "base/localization/tr";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

localizationManager.init({ en: { translation: en }, tr: { translation: tr } });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
