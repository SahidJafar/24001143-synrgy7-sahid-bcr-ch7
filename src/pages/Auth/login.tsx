import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/fragments/Auth/loginForm"
import AuthLayout from "../../components/layouts/authLayout"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/authProvider"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const { auth } = useContext(AuthContext)!

  // Cek Authentication
  useEffect(() => {
    if (auth && localStorage.getItem("token")) {
      navigate(-1)
    }
  }, [auth, navigate])

  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
