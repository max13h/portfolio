import './assets/App.css'
import Animation from '@/components/animation/Animation.tsx'
import Navbar from '@/components/navbar/Navbar.tsx'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '5rem', textAlign: 'center' }}>
        <h1>{t('welcome')}</h1>
      </div>
      <Animation />
    </>
  )
}
