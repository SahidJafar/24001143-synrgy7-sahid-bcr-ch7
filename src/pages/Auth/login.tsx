import LoginForm from "../../components/fragments/Auth/loginForm"
import AuthLayout from "../../components/layouts/authLayout"

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
