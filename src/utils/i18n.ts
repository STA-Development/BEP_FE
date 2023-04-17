import { initReactI18next } from 'react-i18next'
import store from '@redux/store'
import i18n from 'i18next'

import translation from '@assets/localization/en.json'
import translationHy from '@assets/localization/hy.json'
import translationRu from '@assets/localization/ru.json'

const selectedLanguage = store.getState().users.user.language
const localizationResources = {
  en: {
    translation,
  },
  ru: {
    translation: translationRu,
  },
  hy: {
    translation: translationHy,
  },
}

i18n.use(initReactI18next).init({
  resources: localizationResources,
  lng: `${selectedLanguage}`,
  fallbackLng: ['en', 'ru', 'hy'],
  debug: false,
  keySeparator: false,
})
