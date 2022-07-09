import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const RequireAuth = ({ children }) => {
  const user = useSelector(({ user }) => user.user)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/" state={{ path: location.pathname }} />
  }

  return children
}

export default RequireAuth
