import styles from './Landing.module.css'
import Logo from '../../assets/meow.svg'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Meow Meow Beans</h1>
      <img src={Logo} alt="A meow meow bean" />
    </main>
  )
}

export default Landing
