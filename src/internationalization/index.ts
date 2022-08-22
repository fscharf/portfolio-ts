import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import * as en from './en'
import * as pt from './pt'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    interpolation: { escapeValue: false },
    debug: false,
    resources: {
      'pt-BR': {
        translation: pt
      },
      'en-US': {
        translation: en
      }
    }
  })

export default i18next
