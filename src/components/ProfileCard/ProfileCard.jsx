import { Link } from "react-router-dom"

import DefaultPic from '../../assets/profile.png'
import Rating from '../../components/Rating/Rating'

const ProfileCard = (props) => {
  const { avatar, name, rating, id } = props.profile

  const profilePic = avatar ? avatar : DefaultPic

  console.log(rating)

  return (
    <Link to={`/profiles/${id}`}>
      <article>

        <img src={profilePic} alt={`${name}'s avatar`} />
        <h1>{name}</h1>

        <Rating rating={rating}/>

      </article>
    </Link>
  )
}

export default ProfileCard