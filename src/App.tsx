import './App.css'
import { useState } from 'react'

function App() {
  const displayImpact = () => {
      setIsImpact(true)
      setTimeout(() => {
        setIsImpact(false)
      }, 500)
    }

  const onClick = async () => {
    await displayImpact()

    await displayHitBody()

    await displayBackgroundBody()

    await displayBodyComeBack()
  }













  const sprites = [
    '../public/Celle-la_nobg4bits.png',
    '../public/Celle-la_nobg4bits.png',
    '../public/Celle-la_nobg4bits.png',
  ]

  const [isImpact, setIsImpact] = useState<boolean>(true)
  const [imageDisplayed, setImageDisplayed] = useState<string>('../public/Celle-la_nobg4bits.png')



  return (
    <>
      <div className="container">
        <img
          className="image-me"
          src={imageDisplayed}
          alt="test"
          onClick={displayImpact}
        />
        {isImpact && (
          <img
            className="image-impact"
            src="../public/impact_8bit.png"
            alt="test"
          />
        )}
      </div>
    </>
  )
}

export default App
