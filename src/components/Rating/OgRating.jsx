import { useState } from 'react'
import useSound from 'use-sound'
import styles from './Rating.module.css'

import emptyBeenz from '../../assets/emptyBeenz.png'
import fullBeenz from '../../assets/fullBeenz.png'
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'
import myBeenz from '../../assets/audio/MyMeowMeowBeenz.wav'

const Rating = (props) => {
  const [rating, setRating] = useState(props.rating ? props.rating : 0)
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
    <section>

      {rating}
      <div>
        {Array.from({ length: rating }, (_, index) => index + 1).map(score => (
          <img
            key={score}
            id={score}
            onClick={handleClick}
            className={styles.beenz}
            onMouseOver={handleHover}
            onMouseLeave={handleExit}
            src={score <= (hover ?? rating) ? fullBeenz : emptyBeenz}
            alt={score <= (hover ?? rating) ? 'filled beenz' : 'empty beenz'}
          />
        ))}
      </div>

    </section>
  )
}

export default Rating