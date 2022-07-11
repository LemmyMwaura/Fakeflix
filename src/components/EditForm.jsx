import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

import { BiX } from "react-icons/bi"
import { userLogIn } from "../features/userSlice"
import { toogleFormState } from "../features/showEditFormSlice"
import {
  auth,
  updateProfile,
  updateEmail,
} from "../Auth/firebaseConfig"

const EditForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const [changeName, setName] = useState(user.name)
  const [changeEmail, setEmail] = useState(user.email)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const fetchNewProfileData = () => {
    auth.currentUser
      .reload()
      .then(() => {
        console.log(auth.currentUser)
        dispatch(
          userLogIn({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email,
            name: auth.currentUser.displayName,
          })
        )
      })
      .catch((err) => alert(err.message))
  }

  const editEmail = (email) => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        fetchNewProfileData()
        dispatch(toogleFormState())
      })
      .catch((err) => alert(err.message))
  }

  const editName = (data) => {
    updateProfile(auth.currentUser, {
      displayName: data.username,
    })
      .then(() => editEmail(data.email))
      .catch((err) => alert(err.message))
  }

  const editProfile = (data) => {
    editName(data)
  }

  return (
    <div>
      <div
        className="edit-form-overlay"
        onClick={() => dispatch(toogleFormState())}
      >
        <BiX className="overlay-icon" />
      </div>
      <div className="edit-form">
        <form>
          <h1>Edit Profile</h1>
          <p>To update your profile, your last login must be recent
          </p>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={changeName}
              {...register("username", {
                required: true,
                onChange: (e) => setName(e.target.value),
              })}
            />
            {errors.username && (
              <span className="error">Username is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={changeEmail}
              {...register("email", {
                required: true,
                onChange: (e) => setEmail(e.target.value),
              })}
            />
            {errors.email && <span className="error">Email is required</span>}
          </div>

          <button
            className="btn edit-profile-btn"
            onClick={handleSubmit(editProfile)}
            type="submit"
          >
            Edit Info
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
