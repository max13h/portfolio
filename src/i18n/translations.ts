import fr from "../locales/fr.json"
import en from "../locales/en.json"

export type Locale = "fr" | "en"

type TranslationValue = string | { [key: string]: TranslationValue }

const translations: Record<Locale, TranslationValue> = { fr, en }

const resolve = (obj: TranslationValue, key: string): string | undefined => {
  const parts = key.split(".")
  let current: TranslationValue = obj
  for (const part of parts) {
    if (typeof current === "string") return undefined
    current = current[part]
    if (current === undefined) return undefined
  }
  return typeof current === "string" ? current : undefined
}

export const t = (locale: Locale, key: string): string => {
  return (
    resolve(translations[locale], key) ?? resolve(translations.fr, key) ?? key
  )
}

export const getLocaleFromUrl = (url: { pathname: string }): Locale => {
  const firstSegment = url.pathname.split("/").filter(Boolean)[0]
  if (firstSegment === "en") return "en"
  return "fr"
}
