import Rating from '../Rating/Rating'
import defaultPic from '../../assets/icons/profile.png'

const ProfileCard = (props) => {
  const { profile } = props
  const profilePic = profile.avatar ? profile.avatar : defaultPic

  return (
    <article>

      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>

      <Rating
        profileId={profile.id}
        handleVote={props.handleVote}
        votesReceived={profile.votesReceived}
      />

    </article>
  )
}

export default ProfileCard