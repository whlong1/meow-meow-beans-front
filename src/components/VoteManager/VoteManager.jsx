import { useState } from 'react'
import useSound from 'use-sound'

// Images
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'

// Audio
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'

const VoteManager = (props) => {
  const { profile } = props
  const [hover, setHover] = useState(null)

  const voteCount = profile.votesReceived.length
  const total = profile.votesReceived.reduce((sum, v) => sum + v.value, 0)
  const rating = voteCount ? total / voteCount : 1

  const handleClick = (e) => {
    const newValue = parseInt(e.target.id) + 1
    newValue > rating ? rateUp() : rateDown()
    props.handleVote({
      value: newValue, profileId: profile.id
    })
  }

  const handleHover = (e) => {
    if (e.type === 'mouseover') {
      setHover(e.target.id)
    } else if (e.type === 'mouseleave') {
      setHover(null)
    }
  }

  const [rateUp] = useSound(upMeow, { volume: 0.2 })
  const [rateDown] = useSound(downMeow, { volume: 0.2 })

  return (
    <section>
      {Array.from({ length: 5 }, (_, idx) => (
        <img
          id={idx}
          key={idx}
          onClick={handleClick}
          src={idx <= (hover ?? rating - 1) ? bean : noBean} alt="Bean symbol"
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
        />
      ))}
    </section>
  )
}

export default VoteManager