import { useState } from "react"
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"

import { auth, updateProfile } from "../Auth/firebaseConfig"
import { toogleFormState } from "../features/showEditFormSlice"

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

  const editProfile = (data) => {
    updateProfile(auth.currentUser, {
      displayName: data.username,
      email: data.email,
    })
      .then(() => {
        dispatch(toogleFormState())
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <div>
      <div className="edit-form-overlay"></div>
      <div className="edit-form">
        <form>
          <h1>Edit Profile</h1>
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
