import VoteManager from '../VoteManager/VoteManager'
import defaultPic from '../../assets/icons/profile.png'

const ProfileCard = (props) => {
  const { profile } = props
  const profilePic = profile.avatar ? profile.avatar : defaultPic

  return (
    <article>

      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>

      <VoteManager
        profile={profile}
        handleVote={props.handleVote}
      />

    </article>
  )
}

export default ProfileCard