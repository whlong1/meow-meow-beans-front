import { Link } from "react-router-dom"

import bean from '../../assets/bean.png'
import noBean from '../../assets/noBean.png'
import defaultPic from '../../assets/profile.png'

const ProfileCard = (props) => {
  const { avatar, name, rating, id } = props.profile

  const profilePic = avatar ? avatar : defaultPic

  const beanCounter = Array.from({ length: 5 }, (_, idx) => {
    return idx < rating
      ? <img key={idx} src={bean} alt="Bean" />
      : <img key={idx} src={noBean} alt="No bean" />
  })

  return (
    <Link to={`/profiles/${id}`}>
      <article>

        <img src={profilePic} alt={`${name}'s avatar`} />
        <h1>{name}</h1>

        <section>
          <h2>{rating}</h2>
          <img src={noBean} alt="Rating" />
        </section>

        <section>
          {beanCounter}
        </section>

      </article>
    </Link>
  )
}

export default ProfileCard