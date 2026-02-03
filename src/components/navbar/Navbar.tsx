import css from './navbar.module.css'
import LangSelector from '@/components/langSelector/LangSelector.tsx'

export default function Navbar() {
  return (
    <>
      <nav className={css.navbar}>
        <div>
          <a
            href="/"
            className="btn"
          >
            test
          </a>
        </div>
        <LangSelector />
        <a
          className="btn"
          href="mailto:contact@hmae.fr"
          target="_blank"
        >
          Contact
        </a>
      </nav>
    </>
  )
}
