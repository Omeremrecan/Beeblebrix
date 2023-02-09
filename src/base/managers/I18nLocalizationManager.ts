import { Keys } from "base/localization/Keys";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

class LocalizationManager {
  options: any;

  constructor(options: any) {
    this.options = options;
  }

  getLanguages() {
    return this.options.languages;
  }

  getDefaultLanguage() {
    return this.options.defaultLanguage;
  }

  init(resources: any) {
    i18next.use(initReactI18next).init({
      lng: this.options.defaultLanguage.key,
      debug: false,
      resources: resources,
    });
  }

  translate(key: Keys): string {
    return i18next.t(key);
  }
}

export default LocalizationManager;