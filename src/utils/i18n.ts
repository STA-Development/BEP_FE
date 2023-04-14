import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import translation from '@assets/localization/en.json'
import translationRu from '@assets/localization/ru.json'

const localizationResources = {
  en: {
    translation,
  },
  ru: {
    translation: translationRu,
  },
}

i18n.use(initReactI18next).init({
  resources: localizationResources,
  lng: 'eng',
  fallbackLng: ['en', 'ru'],
  debug: false,
  keySeparator: false,
})
