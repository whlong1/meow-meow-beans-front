import ProfileCard from '../../components/ProfileCard/ProfileCard'

const ProfileList = (props) => {
  if (!props.profiles.length) return <h1>Loading</h1>

  return (
    <main className='list'>
      {props.profiles.map((profile) =>
        <ProfileCard
          key={profile.id}
          profile={profile}
          handleVote={props.handleVote}
        />
      )}
    </main>
  )
}

export default ProfileList