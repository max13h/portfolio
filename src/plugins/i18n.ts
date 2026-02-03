import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from '../../public/locales/en/translation.json'
import translationFR from '../../public/locales/fr/translation.json'

export type AvailableLanguage = {
  translation: Record<string, unknown>
  flag: string
  label: string
}
export type AvailableLanguages = Record<string, AvailableLanguage>

export const availableLanguages: AvailableLanguages = {
  en: {
    translation: translationEN,
    flag: '🇬🇧',
    label: 'English',
  },
  fr: {
    translation: translationFR,
    flag: '🇫🇷',
    label: 'Français',
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: availableLanguages,
    fallbackLng: 'en', // fallback language if translation is not found for the current language
    lng: localStorage.getItem('lang') || 'en',
    supportedLngs: ['en', 'fr'],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
