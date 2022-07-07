import { useContext } from "react"
import { AuthContext } from "./Auth"
import { useLocation, Navigate } from "react-router-dom"

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  }

  return children
}

export default RequireAuth
