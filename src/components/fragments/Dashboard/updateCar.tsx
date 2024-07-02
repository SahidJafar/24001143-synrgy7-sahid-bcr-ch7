/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from "@hookform/resolvers/yup"
import { Datepicker, Radio } from "flowbite-react"
import { useState, ChangeEvent, useEffect, useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { Link, useNavigate, useParams } from "react-router-dom"
import { updateCarFormData } from "../../../utils/types/cars"
import { updateCarFormSchema } from "../../../utils/validators/carsValidation"
import { CarsContext } from "../../../context/carsProvider"

const UpdateCar: React.FC = () => {
  const [optionsField, setOptionsField] = useState<string[]>([""])
  const [specsField, setSpecsField] = useState<string[]>([""])
  const [image, setImage] = useState<string | null>(null)
  const { id } = useParams()
  const [carData, setCarData] = useState<updateCarFormData | null>(null)
  const { fetchCarsById, updateCar } = useContext(CarsContext)! //Context
  const navigate = useNavigate()

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { isSubmitted, errors },
  } = useForm<updateCarFormData>({
    resolver: yupResolver(updateCarFormSchema) as any,
  })

  const handleChangeOptionsInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newOptionsField = [...optionsField]
    newOptionsField[index] = e.target.value
    setOptionsField(newOptionsField)
    setValue(`options.${index}`, e.target.value)
  }

  const handleChangeSpecsInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newSpecsField = [...specsField]
    newSpecsField[index] = e.target.value
    setSpecsField(newSpecsField)
    setValue(`specs.${index}`, e.target.value)
  }

  const handleAddOptionsInput = () => {
    const newOptionsField = [...optionsField, ""]
    setOptionsField(newOptionsField)
    setValue("options", newOptionsField)
  }

  const handleAddSpecsInput = () => {
    const newSpecsField = [...specsField, ""]
    setSpecsField(newSpecsField)
    setValue("specs", newSpecsField)
  }

  const handleRemoveOptionsInput = () => {
    const newOptionsField = [...optionsField]
    newOptionsField.pop() // Menghapus elemen terakhir dari array
    setOptionsField(newOptionsField)
    setValue("options", newOptionsField)
  }

  const handleRemoveSpecsInput = () => {
    const newSpecsField = [...specsField]
    newSpecsField.pop() // Menghapus elemen terakhir dari array
    setSpecsField(newSpecsField)
    setValue("specs", newSpecsField)
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImage(reader.result as string) // Cast reader.result as string
      })
      reader.readAsDataURL(file)
    }
  }
  const handleClearImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault() // Prevent default behavior (form submission or reload)
    setImage(null) // Clear the image by setting state to null
    const fileInput = document.getElementById("imageInput") as HTMLInputElement
    if (fileInput) {
      fileInput.value = "" // Reset file input value to clear the file name display
    }
  }

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const carData = await fetchCarsById(Number(id))
        if (carData) {
          setCarData(carData)

          setValue("plate", carData.plate)
          setValue("manufacture", carData.manufacture)
          setValue("model", carData.model)
          setValue("rent_per_day", carData.rent_per_day)
          setValue("capacity", carData.capacity)
          setValue("description", carData.description)
          setValue("available_at", new Date(carData.available_at))
          setValue("transmission", carData.transmission)
          setValue("available", carData.available.toString() as "true" | "false")
          setValue("type", carData.type)
          setValue("year", carData.year)
          setValue("image", carData.image)
          setValue("options", carData.options || [])
          setValue("specs", carData.specs || [])

          setOptionsField(carData.options || [])
          setSpecsField(carData.specs || [])

          if (carData.image) {
            setImage(carData.image)
          }
        }
      } catch (error) {
        console.error("Error fetching car data:", error)
      }
    }
    fetchCarData()
  }, [id, setValue, setOptionsField, setSpecsField, setImage, fetchCarsById])

  const onSubmitHandler = async (data: updateCarFormData) => {
    try {
      await updateCar(data, Number(id))
      navigate("/admin/cars")
    } catch (error) {
      console.error("An error occurred during updating car:", error)
    }
  }

  return (
    <>
      <div className="flex flex-row space-x-2 mt-5 md:ml-8">
        <p className="font-bold">Cars</p>
        <i data-feather="chevron-right"></i>
        <p className="text-[#222222] font-bold">List Car</p>
        <i data-feather="chevron-right"></i>
        <p className="text-[#222222]">Add New Car</p>
      </div>
      <section id="addNewCar">
        <div className="flex mt-10 md:ml-8">
          <h1 className="font-bold text-xl">Add New Car</h1>
        </div>
        <div className="flex flex-col md:mx-8 mt-5 md:w-11/12 w-10/12 h-auto md:py-5 md:px-5 bg-white rounded-sm">
          <form onSubmit={handleSubmit((data) => onSubmitHandler(data))} className="flex flex-col md:gap-5 gap-1 w-full h-full">
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Plate <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("plate")} />
                {isSubmitted && errors.plate && <span className="text-red-500">{errors.plate.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Manufacture <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("manufacture")} />
                {isSubmitted && errors.manufacture && <span className="text-red-500">{errors.manufacture.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Model <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("model")} />
                {isSubmitted && errors.model && <span className="text-red-500">{errors.model.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-2/5 md:w-1/6">
                <label className="flex items-center">
                  Rent Per Day <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="number" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("rent_per_day")} />
                {isSubmitted && errors.rent_per_day && <span className="text-red-500">{errors.rent_per_day.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Capacity <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="number" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("capacity")} />
                {isSubmitted && errors.capacity && <span className="text-red-500">{errors.capacity.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Description <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <textarea id="message" rows={4} className="md:w-[339px] md:h-[50px] rounded-sm border border-[#D0D0D0]" {...register("description")} />
                {isSubmitted && errors.description && <span className="text-red-500">{errors.description.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-2/5 md:w-1/6">
                <label className="flex items-center">
                  Available at <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <Controller
                  name="available_at"
                  control={control}
                  render={({ field }) => (
                    <Datepicker
                      {...field}
                      value={field.value instanceof Date ? new Date(field.value).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : field.value}
                      className="md:w-[339px] md:h-[36px]"
                      onSelectedDateChanged={(date) => field.onChange(date)}
                    />
                  )}
                />
                {isSubmitted && errors.available_at && <span className="text-red-500">{errors.available_at.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Transmission<p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex space-x-5 md:w-[339px] md:h-[36px]">
                  <Controller
                    name="transmission"
                    control={control}
                    defaultValue={carData?.transmission}
                    render={({ field }) => (
                      <>
                        <div className="flex items-center gap-2">
                          <Radio id="manual" {...field} value="manual" checked={field.value === "manual"} />
                          <label htmlFor="manual">Manual</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="automatic" {...field} value="automatic" checked={field.value === "automatic"} />
                          <label htmlFor="automatic">Automatic</label>
                        </div>
                      </>
                    )}
                  />
                </div>
                {isSubmitted && errors.transmission && <span className="text-red-500">{errors.transmission.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Available<p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex space-x-5 md:w-[339px] md:h-[36px]">
                  <Controller
                    name="available"
                    control={control}
                    defaultValue={carData?.available}
                    render={({ field }) => (
                      <>
                        <div className="flex items-center gap-2">
                          <Radio id="true" {...field} value="true" checked={field.value === "true"} />
                          <label htmlFor="true">True</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Radio id="false" {...field} value="false" checked={field.value === "false"} />
                          <label htmlFor="false">False</label>
                        </div>
                      </>
                    )}
                  />
                </div>
                {isSubmitted && errors.available && <span className="text-red-500">{errors.available.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Type <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("type")} />
                {isSubmitted && errors.type && <span className="text-red-500">{errors.type.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Year <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col">
                <input type="number" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register("year")} />
                {isSubmitted && errors.year && <span className="text-red-500">{errors.year.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Options <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col space-y-2">
                {optionsField.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register(`options.${index}`)} value={option} onChange={(e) => handleChangeOptionsInput(index, e)} />
                    <button type="button" onClick={handleAddOptionsInput} className="flex items-center">
                      <i data-feather="plus-circle" className="mt-2 text-gray-400 hover:text-blue-500" />
                    </button>
                    <button type="button" disabled={optionsField.length === 1} onClick={handleRemoveOptionsInput} className="flex items-center">
                      <i data-feather="x-circle" className="mt-2 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                ))}
                {isSubmitted && errors.options && <span className="text-red-500">{errors.options.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Specs <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="flex flex-col space-y-2">
                {specsField.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="text" className="md:w-[339px] md:h-[36px] rounded-sm border border-[#D0D0D0]" {...register(`specs.${index}`)} value={spec} onChange={(e) => handleChangeSpecsInput(index, e)} />
                    <button type="button" onClick={handleAddSpecsInput} className="flex items-center">
                      <i data-feather="plus-circle" className="mt-2 text-gray-400 hover:text-blue-500" />
                    </button>
                    <button type="button" disabled={specsField.length === 1} onClick={handleRemoveSpecsInput} className="flex items-center">
                      <i data-feather="x-circle" className="mt-2 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                ))}
                {isSubmitted && errors.specs && <span className="text-red-500">{errors.specs.message}</span>}
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <div className="w-1/6">
                <label className="flex items-center">
                  Foto <p className="text-[#FA2C5A]">*</p>
                </label>
              </div>
              <div className="md:flex md:space-x-3">
                <div className="flex flex-col">
                  <input
                    id="imageInput"
                    type="file"
                    {...register("image")}
                    className="md:w-[339px] md:h-[36px] border border-[#D0D0D0] rounded-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                  file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-2 file:px-4 file:text-xs
                  dark:file:bg-neutral-700 dark:file:text-neutral-400"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  <p className="text-[#8A8A8A]">File size max. 2MB</p>
                  {errors.image && <span className="text-red-500">{errors.image.message}</span>}
                  {image && <img src={image} alt="preview" width={200} />}
                </div>
                <button onClick={handleClearImage} className="mt-1 items-center justify-center w-[100px] h-[30px] border border-gray-500 hover:border-blue-500 hover:text-blue-500 rounded-sm text-gray-500">
                  Clear Image
                </button>
              </div>
            </div>
            <div className="flex flex-row md:space-x-5 space-x-1 mt-5 md:ml-8">
              <Link to={"/admin/cars"}>
                <button type="button" className="items-center justify-center md:w-[144px] md:h-[48px] w-[80px] h-[40px] border border-[#0D28A6] rounded-sm">
                  <p className="text-[#0D28A6] font-bold">Cancel</p>
                </button>
              </Link>
              <button type="submit" className="items-center justify-center md:w-[144px] md:h-[48px] w-[80px] h-[40px] border bg-[#0D28A6] rounded-sm">
                <p className="text-white font-bold">Update</p>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default UpdateCar
