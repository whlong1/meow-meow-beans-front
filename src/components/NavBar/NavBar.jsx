import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>

      <NavLink to="/">
        <img src={logo} alt="Meow Meow Bean" />
      </NavLink>

      {user ?
        <ul>
          <li><NavLink to="/profiles">PROFILES</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
        :
        <ul>
          <li><NavLink to="/login">LOGIN</NavLink></li>
          <li><NavLink to="/signup">SIGN UP</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
