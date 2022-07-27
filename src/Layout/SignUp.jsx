import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import Fakeflix from "../assets/images/Fakeflix.png"
import {
  auth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "../Auth/firebaseConfig"

const SignUp = () => {
  const [firebaseErr, setFirebaseErr] = useState(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const signUp = (data) => {
    createUserWithEmailAndPassword(auth, data.emailOrPhoneNumber, data.password)
      .then((user) => {
        setFirebaseErr(null)
        updateProfile(auth.currentUser, {
          displayName: data.username,
        })
          .then()
          .catch((err) => {
            alert(err.message)
          })
      })
      .catch((err) => {
        setFirebaseErr(err.message)
      })
    reset()
  }

  return (
    <div className="signin-wrapper">
      <div className="signin-overlay"></div>
      <div className="signin-fade-in-top"></div>
      <div className="signin-fade-in-bottom"></div>

      <nav className="signup-nav">
        <Link to="/">
          <img
            src={Fakeflix}
            className="svg-icon svg-icon-netflix-logo"
            alt="app-logo"
          />
        </Link>
      </nav>

      <div className={`sign-in-screen`}>
        <form>
          <h2>Sign Up</h2>
          {firebaseErr && <div className="firebase-error">{firebaseErr}</div>}
          <div className="firebase-error">
            This is a clone Netflix app. Use a dummy account instead e.g
            name@name.com.
          </div>
          <input
            type="text"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <span className="error">username is required</span>
          )}
          <input
            type="text"
            placeholder="email or phone number"
            {...register("emailOrPhoneNumber", { required: true })}
          />
          {errors.emailOrPhoneNumber && (
            <span className="error">This field is required</span>
          )}
          <input
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error">Password is required</span>
          )}
          <button className="btn sign-in-btn" onClick={handleSubmit(signUp)}>
            Sign Up
          </button>
          <div className="signin-screen-check">
            <div className="check">
              <input type="checkbox" defaultChecked />
              <span>Remember me</span>
            </div>
            <span>Need Help?</span>
          </div>
        </form>
        <div className="signup-footer">
          <span>New to Netflix?</span>
          <button
            className="btn sign-up-btn"
            onClick={() => navigate("/signin")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
