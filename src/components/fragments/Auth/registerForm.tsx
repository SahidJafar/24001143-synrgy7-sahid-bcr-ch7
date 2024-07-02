import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { RegisterFormData } from "../../../utils/types/auth"
import { registerFormSchema } from "../../../utils/validators/authValidation"
import { useContext } from "react"
import { AuthContext } from "../../../context/authProvider"

const RegisterForm: React.FC = () => {
  const navigate = useNavigate()
  const { registerUser } = useContext(AuthContext)! //Context

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  })

  const onSubmitHandler = async (formData: RegisterFormData) => {
    try {
      await registerUser(formData)
      navigate("/login")
    } catch (error) {
      console.error("Registration error:", error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-4">
      <div className="space-y-5 text-sm font-light">
        <label htmlFor="name">Name</label>
        {isSubmitted && errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input type="text" id="name" className="rounded-md border p-2 w-full" {...register("name")} />
      </div>
      <div className="space-y-5 text-sm font-light">
        <label htmlFor="email">Email</label>
        {isSubmitted && errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input type="email" id="email" className="rounded-md border p-2 w-full" {...register("email")} />
      </div>
      <div className="space-y-5 text-sm font-light">
        <label htmlFor="password">Password</label>
        {isSubmitted && errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <input type="password" id="password" className="rounded-md border p-2 w-full" {...register("password")} />
      </div>
      <button type="submit" className="rounded-sm bg-[#0D28A6] py-2 text-white font-bold text-sm">
        Register
      </button>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <Link to={"/login"} className="text-blue-500 hover:text-blue-600">
          Login
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
