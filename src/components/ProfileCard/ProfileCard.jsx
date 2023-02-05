import Rating from '../Rating/Rating'
import defaultPic from '../../assets/profile.png'

const ProfileCard = ({ profile }) => {
  const { avatar, name, id, votesReceived } = profile
  const profilePic = avatar ? avatar : defaultPic

  return (
    <article>

      <img src={profilePic} alt={`${name}'s avatar`} />
      <h1>{name}</h1>

      <Rating votesReceived={votesReceived} />

    </article>
  )
}

export default ProfileCard