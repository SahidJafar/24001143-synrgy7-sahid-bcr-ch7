import * as yup from "yup"

export const loginFormSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters").max(40, "Password must not exceed 40 characters"),
})

export const registerFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters").max(40, "Password must not exceed 40 characters"),
})
