import en from './langs/en.json'
import it from './langs/it.json'

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      }
    },
    lng: navigator.language.includes('it') ? "it" : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
