import { useTranslation } from 'react-i18next'
import css from './langSelector.module.css'
import { availableLanguages } from '@/plugins/i18n.ts'

export default function LangSelector() {
  const { i18n } = useTranslation()

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng)
  }

  return (
    <>
      <div className={css.container}>
        {Object.keys(availableLanguages).map((key) => {
          return (
            <button onClick={() => changeLanguage(key)}>
              {availableLanguages[key].flag} {availableLanguages[key].label}
            </button>
          )
        })}
      </div>
    </>
  )
}
