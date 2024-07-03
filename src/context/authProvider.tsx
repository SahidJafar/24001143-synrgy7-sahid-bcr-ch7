import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"
import axios from "axios"
import { LoginFormData, RegisterFormData } from "../utils/types/auth"
import { axiosInstance } from "../services/axios"

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
  googleLogin: (credential: string) => Promise<void>
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
      const response = await axiosInstance.post("users/login", formData)
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

  const googleLogin = async (credential: string): Promise<void> => {
    try {
      const response = await axiosInstance.post(
        "users/auth/google",
        { token: credential },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": true,
          },
        }
      )

      const user = {
        id: response.data.data.user.sub,
        name: response.data.data.user.name,
        email: response.data.data.user.email,
        role: "member",
      }

      const token = response.data.data.token

      setAuth(user)
      localStorage.setItem("token", token)
    } catch (error) {
      console.log(error)
    }
  }

  const registerUser = async (formData: RegisterFormData): Promise<void> => {
    try {
      await axiosInstance.post("users/register", formData)
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
    googleLogin,
    registerUser,
    logoutUser,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider
