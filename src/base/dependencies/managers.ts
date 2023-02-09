import I18nLocalizationManager from "base/managers/I18nLocalizationManager";
import languages from "constants/languages";

export const localizationManager = new I18nLocalizationManager({
  languages: [languages.ENGLISH, languages.TURKISH],
  defaultLanguage: languages.TURKISH,
});