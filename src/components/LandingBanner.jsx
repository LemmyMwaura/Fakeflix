import { GrNext } from "react-icons/gr"
import { Link } from "react-router-dom"
import Fakeflix from "../assets/images/Fakeflix.png"

export default function LandingBanner() {
  return (
    <>
      <div className="landing-banner">
        <div className="landing-overlay"></div>
        <div className="landing-fade-in-top"></div>
        <div className="landing-fade-in-bottom"></div>
        <nav className="landing-nav">
          <img
            src={Fakeflix}
            className="svg-icon svg-icon-netflix-logo"
            alt="app-logo"
          />
          <Link to="/signin" className="signup">
            Sign In
          </Link>
        </nav>
        <div className="landing-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <div className="landing-input">
            <input type="text" placeholder="Email address" />
            <button className="input-btn">
              <span>Get Started</span>
              <GrNext className="input-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
