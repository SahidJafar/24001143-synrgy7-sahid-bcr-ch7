import RegisterForm from "../../components/fragments/Auth/registerForm"
import AuthLayout from "../../components/layouts/authLayout"

const RegisterPage: React.FC = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
