import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

import styles from './ProfileList.module.css'

const ProfileList = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) return <h1>Loading</h1>

  return (
    <main className={styles.container}>
      {profiles.map((profile) =>
        <ProfileCard key={profile.id} profile={profile} />
      )}
    </main>
  )
}

export default ProfileList