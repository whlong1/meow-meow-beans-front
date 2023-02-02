import Rating from '../../components/Rating/Rating'

const ProfileCard = ({ avatar, name }) => {
  return (
    <li>
      <h1>{name}</h1>
      <img src={avatar} alt={`${name}'s avatar`} />
    </li>
  )
}

export default ProfileCard