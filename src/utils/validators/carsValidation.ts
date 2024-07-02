import * as yup from "yup"

export const addCarFormSchema = yup.object().shape({
  plate: yup.string().required("Plate is required"),
  manufacture: yup.string().required("Manufacture is required"),
  model: yup.string().required("Model is required"),
  image: yup.string().required("Image is required"),
  rent_per_day: yup.number().typeError("Rent per day must be a number").positive("Rent per day must be a positive number").required("Rent per day is required"),
  capacity: yup.number().typeError("Capacity must be a number").positive("Capacity must be a positive number").required("Capacity is required"),
  description: yup.string().required("Description is required"),
  available_at: yup.date().required("Available at is required"),
  transmission: yup
    .mixed()
    .oneOf(["manual", "automatic"] as const)
    .required("Transmission is required"),
  available: yup
    .mixed()
    .oneOf(["true", "false"] as const)
    .required("Available is required"),
  type: yup.string().required("Type is required"),
  year: yup.number().typeError("Year must be a number").positive("Year must be a positive number").required("Year is required"),
  options: yup.array().of(yup.string().required("Option must not be empty")),
  specs: yup.array().of(yup.string().required("Specs must not be empty")),
})

export const updateCarFormSchema = yup.object().shape({
  plate: yup.string().required("Plate is required"),
  manufacture: yup.string().required("Manufacture is required"),
  model: yup.string().required("Model is required"),
  image: yup.string(),
  rent_per_day: yup.number().typeError("Rent per day must be a number").positive("Rent per day must be a positive number").required("Rent per day is required"),
  capacity: yup.number().typeError("Capacity must be a number").positive("Capacity must be a positive number").required("Capacity is required"),
  description: yup.string().required("Description is required"),
  available_at: yup.date().required("Available at is required"),
  transmission: yup
    .mixed()
    .oneOf(["manual", "automatic"] as const)
    .required("Transmission is required"),
  available: yup
    .mixed()
    .oneOf(["true", "false"] as const)
    .required("Available is required"),
  type: yup.string().required("Type is required"),
  year: yup.number().typeError("Year must be a number").positive("Year must be a positive number").required("Year is required"),
  options: yup.array().of(yup.string()),
  specs: yup.array().of(yup.string()),
})
