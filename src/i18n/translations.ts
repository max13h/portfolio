import { createTranslations, getLocaleFromUrl, type Locale } from "@max13h/i18n"
import fr from "../locales/fr.json"
import en from "../locales/en.json"

type TranslationValue = string | { [key: string]: TranslationValue }

const translations: Record<Locale, TranslationValue> = { fr, en }

export const t = createTranslations(translations)
export { getLocaleFromUrl }
export type { Locale }
