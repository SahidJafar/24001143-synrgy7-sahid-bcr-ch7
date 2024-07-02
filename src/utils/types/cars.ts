export type addCarFormData = {
  plate: string
  manufacture: string
  model: string
  image: string
  rent_per_day: number
  capacity: number
  description: string
  available_at: Date
  transmission: "manual" | "automatic"
  available: "true" | "false"
  type: string
  year: number
  options: string[]
  specs: string[]
}

export type updateCarFormData = {
  plate: string
  manufacture: string
  model: string
  image: string
  rent_per_day: number
  capacity: number
  description: string
  available_at: Date
  transmission: "manual" | "automatic"
  available: "true" | "false"
  type: string
  year: number
  options: string[]
  specs: string[]
}
