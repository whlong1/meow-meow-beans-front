import styles from './Landing.module.css'
import logo from '../../assets/logo.svg'
import * as authService from '../../services/authService'

const Landing = ({ user, handleLogout }) => {

  const handleDeleteAccount = async () => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>Meow Meow <br/> Beans</h1>
      <img src={logo} alt="A meow meow bean" />
      {user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing