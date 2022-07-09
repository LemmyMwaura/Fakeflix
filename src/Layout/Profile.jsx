import { signOut, auth } from "../Auth/firebaseConfig"
import image from "../assets/images/avatar.png"

const Profile = () => {
  const handleLogOut = () => {
    signOut(auth).then(() => {
    }).catch((err) => {
      alert(err.message)
    })
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
