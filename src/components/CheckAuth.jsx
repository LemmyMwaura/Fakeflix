import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const CheckAuth = ({ children }) => {
  const user = useSelector(({user}) => user.user)
  const location = useLocation()

  if (user) {
    return <Navigate to="/browse" state={{ path: location.pathname }} />
  }

  return children
}

export default CheckAuth
