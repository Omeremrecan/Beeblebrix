import { CategoryManager } from 'base/managers/CategoryManager'
import I18nLocalizationManager from 'base/managers/I18nLocalizationManager'
import { MovieManager } from 'base/managers/MovieManager'
import { SecurityManager } from 'base/managers/SecurityManager';
import { DialogManager } from 'base/managers/SweetAlertDialogManager';
import configs from 'confgis';
import languages from 'constants/languages'


export const localizationManager = new I18nLocalizationManager({
  languages: [languages.ENGLISH, languages.TURKISH],
  defaultLanguage: languages.TURKISH,
})

export const movieManager = new MovieManager(configs)
export const categoryManager = new CategoryManager(configs)
export const securityManager = new SecurityManager(configs)
export const dialogManager = new DialogManager()
