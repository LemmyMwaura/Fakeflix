import { useRef, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { useSelector } from "react-redux"

//Authenticators
import CheckAuth from "../components/CheckAuth"
import RequireAuth from "../components/RequireAuth"

//components
import HomeScreen from "./HomeScreen"
import LandingPage from "./LandingPage"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Profile from "./Profile"
import image from "../assets/images/avatar.png"
import Fakeflix from "../assets/images/Fakeflix.png"

function Header() {
  const nav = useRef(null)

  const user = useSelector(({ user }) => user.user)

  const handleScroll = () => {
    if (nav.current !== null && scrollY > 100) {
      nav.current?.classList.add("scrolled")
    } else {
      nav.current?.classList.remove("scrolled")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div>
      {user && (
        <nav className="primary-nav" ref={nav}>
          <div className="left">
            <Link to="/">
              <img
                src={Fakeflix}
                className="svg-icon svg-icon-netflix-logo"
                alt="app-logo"
              />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/">TV Shows</Link>
            <Link to="/">Movies</Link>
            <Link to="/">My List</Link>
          </div>
          <div className="profile">
            <Link to="/">kids</Link>
            <Link to="/profile">
              <img className="profile-image" src={image} alt="profile image" />
            </Link>
          </div>
        </nav>
      )}

      <Routes>
        <Route
          path="/browse"
          element={
            <RequireAuth>
              <HomeScreen />
            </RequireAuth>
          }
        />
        <Route
          path="/"
          element={
            <CheckAuth>
              <LandingPage />
            </CheckAuth>
          }
        ></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  )
}

export default Header
