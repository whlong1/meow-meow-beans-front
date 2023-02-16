import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Components
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import NavBar from './components/NavBar/NavBar'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from './services/authService'
import * as voteService from './services/voteService'
import * as profileService from './services/profileService'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    if (user) fetchProfiles()
  }, [user])

  const handleVote = async (formData) => {
    const updatedProfile = await voteService.create(formData)
    setProfiles(profiles.map((profile) => (
      profile.id === updatedProfile.id ? updatedProfile : profile
    )))
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles
                profiles={profiles}
                handleVote={handleVote}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App