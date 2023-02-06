import styles from './Landing.module.css'
import logo from '../../assets/logo.svg'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Meow Meow Beans</h1>
      <img src={logo} alt="A meow meow bean" />
    </main>
  )
}

export default Landing
