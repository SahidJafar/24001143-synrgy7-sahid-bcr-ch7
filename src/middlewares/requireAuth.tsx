import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/authProvider"

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { auth } = useContext(AuthContext)!
  const location = useLocation()

  // console.log("Current auth:", auth) // Debugging: Cek nilai auth saat ini

  const isAuthenticated = auth && allowedRoles.includes(auth.role)

  if (isAuthenticated) {
    return <Outlet />
  } else if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  } else {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />
  }
}

export default RequireAuth
