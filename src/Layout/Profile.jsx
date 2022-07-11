import { useSelector, useDispatch } from "react-redux"
import { signOut, auth } from "../Auth/firebaseConfig"

//components
import image from "../assets/images/avatar.png"
import EditForm from "../components/EditForm"
import Footer from "./Footer"
import { toogleFormState } from "../features/showEditFormSlice"

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const showForm = useSelector((state) => state.showEditForm)

  const handleLogOut = () => {
    signOut(auth)
      .then()
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <>
      <div className="profile-page">
        <div className="profile-page-overlay"></div>
        {showForm && <EditForm />}
        <div className="profile-banner">
          <h1 className="title">Account</h1>
          <div className="account-details">
            <h2>Profile & Controls</h2>
            <div className="details">
              <img className="profile-page-image" src={image} alt="image" />
              <div className="user-details">
                {user && <h2>{user.name}</h2>}
                {user && <h2>{user.email}</h2>}
              </div>
            </div>
          </div>
          <div className="btns">
            <button
              className="btn edit-btn"
              onClick={() => dispatch(toogleFormState())}
            >
              Edit Profile
            </button>
            <button className="btn profile-btn" onClick={() => handleLogOut()}>
              Log Out
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile
