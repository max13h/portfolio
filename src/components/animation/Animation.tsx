import css from './animation.module.css'

export default function Animation() {
  return (
    <>
      <div className={css.container}>
        <div className={css.bodyContainer}>
          <img
            src="/bodySprites/default.png"
            alt="default body"
          />
        </div>
      </div>
    </>
  )
}
