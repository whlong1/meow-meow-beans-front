import ProfileCard from '../../components/ProfileCard/ProfileCard'

const ProfileList = ({ profiles }) => {
  if (!profiles.length) return <h1>Loading</h1>

  return (
    <main className='list'>
      {profiles.map((profile) =>
        <ProfileCard key={profile.id} profile={profile} />
      )}
    </main>
  )
}

export default ProfileList