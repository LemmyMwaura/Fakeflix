import React from "react"

const SignIn = () => {
  return (
    <div className={`sign-in-screen ${true} && active`}>
      <h2>Sign In</h2>
      <input type="text" placeholder="email or phone number" />
      <input type="text" placeholder="password" />
      <button className="btn">Sign In</button>
      <div className="signin-screen-check">
        <div className="check">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <span>Need Help?</span>
      </div>
      <div className="signup-footer">
        <span>New to Netflix?</span>
        <a href="">Sign Up Now</a>
      </div>
    </div>
  )
}

export default SignIn
