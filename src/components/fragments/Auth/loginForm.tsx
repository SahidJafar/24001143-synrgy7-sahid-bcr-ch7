import { useContext } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { AuthContext } from "../../../context/authProvider"
import { LoginFormData } from "../../../utils/types/auth"
import { loginFormSchema } from "../../../utils/validators/authValidation"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loginUser, googleLogin } = useContext(AuthContext)! //Context
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitted },
  } = useForm<LoginFormData>({ resolver: yupResolver(loginFormSchema) })

  const onSubmitHandler = async (formData: LoginFormData) => {
    try {
      // Context
      const user = await loginUser(formData)

      if (user && (user.role === "admin" || user.role === "superadmin")) {
        navigate("/admin/dashboard", { replace: true })
      } else {
        navigate(from, { replace: true })
      }
    } catch (error) {
      console.error("An error occurred during login:", error)
      setError("email", { message: "Invalid email or password" })
      setError("password", { message: "Invalid email or password" })
    }
  }

  const onSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      googleLogin(response.credential)
    } else {
      console.error("Google login failed: no credential returned.")
    }
    window.location.href = "/cars"
  }

  const onError = () => {
    console.log("Login error")
  }

  return (
    <section>
      <div className="flex space-y-5">
        <div className="w-64">
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-4 mt-2">
        <div className="space-y-5 text-sm font-light">
          <label htmlFor="email">Email</label>
          {isSubmitted && errors.email && <p className="text-red-500">{errors.email?.message}</p>}
          <input type="email" id="email" className="rounded-md border p-2 w-full" {...register("email")} />
        </div>
        <div className="space-y-5 text-sm font-light">
          <label htmlFor="password">Password</label>
          {isSubmitted && errors.password && <p className="text-red-500">{errors.password?.message}</p>}
          <input type="password" id="password" className="rounded-md border p-2 w-full" {...register("password")} />
        </div>
        <button type="submit" className="rounded-sm bg-[#0D28A6] py-2 text-white font-bold text-sm">
          Sign In
        </button>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-500 dark:text-gray-300">Not registered yet? </span>
          <Link to={"/register"} className="text-blue-500 hover:text-blue-600">
            Create an Account
          </Link>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
