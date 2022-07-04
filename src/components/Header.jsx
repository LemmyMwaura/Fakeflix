import { useRef, useEffect } from "react"
import { Routes, Route, Link } from "react-router-dom"
import HomeScreen from "./HomeScreen"
import "../stylesheets/header.css"

function Header() {
  const nav = useRef(null)

  const handleScroll = () => {
    if (scrollY > 100) {
      nav.current.classList.add("scrolled")
    } else {
      nav.current.classList.remove("scrolled")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <div>
      <nav className="primary-nav" ref={nav}>
        <Link to="/">Netflix</Link>
        <div className="profile">
          <Link to="/">Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </div>
  )
}

export default Header
