import { useContext, useEffect } from "react"
import RegisterForm from "../../components/fragments/Auth/registerForm"
import AuthLayout from "../../components/layouts/authLayout"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authProvider"

const RegisterPage: React.FC = () => {
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
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
