import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { LoginFormData, RegisterFormData } from "../utils/types/auth"

interface IAuth {
  id: string
  name: string
  email: string
  role: string
}

type AuthContextType = {
  auth: IAuth | null
  setAuth: (user: IAuth | null) => void
  loginUser: (formData: LoginFormData) => Promise<IAuth | undefined>
  registerUser: (formData: RegisterFormData) => Promise<void>
  logoutUser: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth | null>(() => {
    const savedAuth = Cookies.get("auth")
    return savedAuth ? JSON.parse(savedAuth) : null
  })

  useEffect(() => {
    if (auth) {
      Cookies.set("auth", JSON.stringify(auth), { expires: 1, secure: true, sameSite: "strict" })
    } else {
      Cookies.remove("auth")
    }
  }, [auth])

  const loginUser = async (formData: LoginFormData): Promise<IAuth | undefined> => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/login", formData)
      const data = response.data.data
      const token = data.token
      const user = data.user

      setAuth(user)
      localStorage.setItem("token", token)
      return user
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message || error.message)
      } else {
        console.error("An unexpected error occurred:", error)
      }
      return undefined
    }
  }

  const registerUser = async (formData: RegisterFormData): Promise<void> => {
    try {
      await axios.post("http://localhost:8000/api/v1/users/register", formData)
      // console.log(response.data.data) // Handle server response if needed after successful registration
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.message || error.message)
      } else {
        console.error("An unexpected error occurred:", error)
      }
    }
  }

  const logoutUser = () => {
    Cookies.remove("auth")
    setAuth(null)
    localStorage.removeItem("token")
  }

  const contextValue: AuthContextType = {
    auth,
    setAuth,
    loginUser,
    registerUser,
    logoutUser,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
