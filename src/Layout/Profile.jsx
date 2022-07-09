import { useDispatch } from "react-redux"
import { userLogOut } from "../features/userSlice"
import { useNavigate } from "react-router"
import image from "../assets/images/avatar.png"

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogOut = () => {
    dispatch(userLogOut())
    navigate('/')
  }

  return (
    <div className="profile-page">
      <div className="profile-page-overlay"></div>
      <div className="profile-banner">
        <h1 className="title">Account</h1>
        <div className="account-details">
          <h2>Profile & Controls</h2>
          <img className="profile-page-image" src={image} alt="image" />
          <button
            className="btn profile-btn"
            onClick={() => handleLogOut()}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
