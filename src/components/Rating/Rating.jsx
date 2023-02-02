import { useState } from 'react'
import useSound from 'use-sound'
import Label from './Label'
import styles from './Rating.module.css'

import emptyBeenz from '../../assets/emptyBeenz.png'
import fullBeenz from '../../assets/fullBeenz.png'
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'
import myBeenz from '../../assets/audio/MyMeowMeowBeenz.wav'

const Rating = ({ beenzCount }) => {
  const [rating, setRating] = useState(beenzCount)
  const [hover, setHover] = useState(null)

  const handleClick = event => {
    const newValue = event.target.id

    if (newValue === null || newValue === rating) return
    newValue > rating ? rateUp() : rateDown()
    setRating(newValue)
  }

  const handleHover = event => setHover(event.target.id)

  const handleExit = () => hover !== rating && setHover(null)

  const handleClear = () => {
    setRating(0)
    clear()
  }

  // export audio to external data asset?
  const [rateUp] = useSound(
    upMeow,
    { volume: 0.2 }
  )
  const [rateDown] = useSound(
    downMeow,
    { volume: 0.2 }
  )
  const [clear] = useSound(
    myBeenz,
    { volume: 0.2 }
  )

  return (
    <div className={styles.container}>
      <div>
        {Array.from({ length: beenzCount }, (_, index) => index + 1).map(score => (
          <img
            src={score <= (hover ?? rating) ? fullBeenz : emptyBeenz}
            alt={score <= (hover ?? rating) ? 'filled beenz' : 'empty beenz'}
            key={score}
            id={score}
            className={styles.beenz}
            onClick={handleClick}
            onMouseOver={handleHover}
            onMouseLeave={handleExit}
          />
        ))}
      </div>
      <Label rating={rating} />
      <button onClick={handleClear} className={styles.btn} disabled={!rating}>
        Clear Beenz
      </button>
    </div>
  )
}

export default Rating