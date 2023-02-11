import { CategoryManager } from 'base/managers/CategoryManager'
import I18nLocalizationManager from 'base/managers/I18nLocalizationManager'
import { MovieManager } from 'base/managers/MovieManager'
import languages from 'constants/languages'

export const localizationManager = new I18nLocalizationManager({
  languages: [languages.ENGLISH, languages.TURKISH],
  defaultLanguage: languages.TURKISH,
})

export const movieManager = new MovieManager()
export const categoryManager = new CategoryManager()
