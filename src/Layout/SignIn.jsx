import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, Link } from "react-router-dom"
import { auth, signInWithEmailAndPassword } from "../Auth/firebaseConfig"
import Fakeflix from "../assets/images/Fakeflix.png"

const SignIn = () => {
  const [firebaseErr, setFirebaseErr] = useState(null)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const signIn = (data) => {
    signInWithEmailAndPassword(auth, data.emailOrPhoneNumber, data.password)
      .then(() => {
        setFirebaseErr(null)
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
          <h2>Sign In</h2>
          {firebaseErr && <div className="firebase-error">{firebaseErr}</div>}
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
          <button className="btn sign-in-btn" onClick={handleSubmit(signIn)}>
            Sign In
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
            onClick={() => navigate("/signup")}
          >
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn
