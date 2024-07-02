/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom"
import { CarsContext } from "../../../context/carsProvider"
import { useContext, useEffect, useState } from "react"
const ListCar: React.FC = () => {
  const { carsPrivate, error, fetchCarsPrivate, deleteCar } = useContext(CarsContext)!
  const [currentFilter, setCurrentFilter] = useState<string>("All")

  useEffect(() => {
    fetchCarsPrivate()
  }, [])

  if (error) {
    return <p>Error: {error}</p>
  }

  // Filter cars where deleted_at is null
  let filteredCars = carsPrivate?.filter((car) => !car.deleted_at)

  // Apply additional filters based on size criteria
  if (currentFilter === "Small") {
    filteredCars = filteredCars?.filter((car) => car.capacity >= 1 && car.capacity < 4)
  } else if (currentFilter === "Medium") {
    filteredCars = filteredCars?.filter((car) => car.capacity >= 4 && car.capacity < 8)
  } else if (currentFilter === "Large") {
    filteredCars = filteredCars?.filter((car) => car.capacity >= 8)
  }

  const handleDeleteCar = async (id: number) => {
    try {
      await deleteCar(id)
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="flex flex-row space-x-2 mt-5 md:ml-8">
        <p className="font-bold">Cars</p>
        <i data-feather="chevron-right"></i>
        <p className="text-[#222222]">List Car</p>
      </div>
      <section id="listCar">
        <div className="flex justify-between mt-10 md:ml-8">
          <h1 className="font-bold text-xl">List Car</h1>
          <Link to="/admin/cars/addCar">
            <button className="flex flex-row w-[142px] h-[36px] bg-[#0D28A6] rounded-sm items-center justify-center md:mr-10 space-x-1">
              <i data-feather="plus" className="text-white"></i>
              <p className="font-bold leading-none text-white text-center">Add New Car</p>
            </button>
          </Link>
        </div>
        <div className="flex flex-row md:mx-8 mt-5 md:space-x-4 space-x-1">
          {["All", "Small", "Medium", "Large"].map((size) => (
            <button
              key={size}
              className={`w-auto md:px-4 md:py-2 px-2 py-1 bg-[#CFD4ED] hover:bg-[#AEB7E1] focus:bg-[#AEB7E1] ${currentFilter === size ? "opacity-100" : "opacity-50"} focus:opacity-100 border border-[#0D28A6] rounded-sm`}
              onClick={() => setCurrentFilter(size)}
            >
              <p className="font-bold text-[#0D28A6]">{size}</p>
            </button>
          ))}
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-1 lg:space-x-5 mt-5">
          {filteredCars?.length === 0 ? (
            <div className="flex items-center justify-center text-xl font-bold text-gray-500 h-48">Cars not found!</div>
          ) : (
            filteredCars?.map((car) => (
              <div key={car.id} className="flex flex-col w-full h-full bg-white items-center rounded-lg shadow-lg border lg:ml-5">
                <div className="lg:space-y-5 space-y-2 lg:ml-0 ml-2">
                  <div className="flex items-center justify-center w-[200px] h-[150px] lg:w-[300px] lg:h-[200px]">
                    <img src={car.image || ""} className="object-cover" alt={car.model} />
                  </div>
                  <p>
                    {car.manufacture} {car.model}
                  </p>
                  <p className="text-base font-bold">Rp.{car.rent_per_day}</p>
                  <div className="flex flex-row lg:space-x-2 space-x-1">
                    <i data-feather="clock" className="text-gray-400"></i>
                    <p className="text-gray-400">Updated at {new Date(car.updated_at).toLocaleString()}</p>
                  </div>
                  <div className="flex flex-row space-x-5">
                    <button onClick={() => handleDeleteCar(car.id)} className="flex flex-row items-center justify-center space-x-2 lg:w-[144px] lg:h-[48px] w-[100px] h-[35px] border border-[#FA2C5A] rounded-sm">
                      <i data-feather="trash" className="text-[#FA2C5A]"></i>
                      <p className="text-[#FA2C5A] font-bold">Delete</p>
                    </button>
                    <Link to={`/admin/cars/updateCar/${car.id}`}>
                      <button className="flex flex-row items-center justify-center space-x-2 lg:w-[144px] lg:h-[48px] w-[100px] h-[35px] border bg-[#5CB85F] rounded-sm">
                        <i data-feather="edit" className="text-white"></i>
                        <p className="text-white font-bold">Edit</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}

export default ListCar
