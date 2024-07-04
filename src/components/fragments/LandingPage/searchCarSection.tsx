import { useContext, useEffect, useState } from "react"
import { CarsContext } from "../../../context/carsProvider"
import feather from "feather-icons"
import CardCar from "./cardCar"

const SearchCarSection: React.FC = () => {
  const { carsPublic, searchCars } = useContext(CarsContext)!
  const [typeDrive, setTypeDrive] = useState("")
  const [passenger, setPasenger] = useState(0)
  const [capacity, setCapacity] = useState("")
  const [avaliableAt, setAvaliableAt] = useState("")
  const [pickupTime, setPickupTime] = useState("")

  const handleAvaliableAt = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setAvaliableAt(event.target.value)
  }

  const handlePickupTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    setPickupTime(event.target.value)
  }

  const handleTypeDrive = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTypeDrive = event.target.value
    setTypeDrive(selectedTypeDrive)
    if (selectedTypeDrive === "dengan-sopir") {
      setPasenger(1)
    } else {
      setPasenger(0)
    }
  }

  const handleCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCapacity(event.target.value)
  }

  const handleSubmit = async () => {
    const totalCapacity = (passenger + (parseInt(capacity) || 0)).toString()
    searchCars(totalCapacity, avaliableAt, pickupTime)
  }

  useEffect(() => {
    feather.replace()
  }, [searchCars, carsPublic])

  return (
    <>
      <section id="search-car" className="relative mb-96 lg:mb-20">
        <div className="absolute top-0 left-0 right-0 px-6 mx-auto mt-[-10px] lg:w-[1047px] lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white rounded-lg shadow-md p-6">
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Tipe Driver</p>
              <select id="typeDrive" name="typeDrive" value={typeDrive} onChange={handleTypeDrive} className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-10  px-2">
                <option value="" selected>
                  Pilih Tipe Driver
                </option>
                <option value="dengan-sopir">Dengan Sopir</option>
                <option value="tanpa-sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Tanggal</p>
              <input type="date" id="date" name="date" value={avaliableAt} onChange={handleAvaliableAt} className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2" />
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Waktu Jemput/Ambil</p>
              <select id="waktuJemput" name="waktuJemput" value={pickupTime} onChange={handlePickupTime} className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2">
                <option value="" disabled selected>
                  Pilih Waktu
                </option>
                <option value="08:00:00">08.00 WIB</option>
                <option value="09:00:00">09.00 WIB</option>
                <option value="10:00:00">10.00 WIB</option>
                <option value="11:00:00">11.00 WIB</option>
                <option value="12:00:00">12.00 WIB</option>
              </select>
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Jumlah Penumpang (optional)</p>
              <div className="relative">
                <input type="number" id="jumlahPenumpang" name="jumlahPenumpang" value={capacity} onChange={handleCapacity} className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2" />
              </div>
            </div>
            <div>
              <p className="font-light text-sm mb-6"></p>
              <button id="load-btn" onClick={handleSubmit} className="bg-green-500 h-9 hover:bg-green-600 text-white rounded px-4" type="submit">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <CardCar carsPublic={carsPublic} />
      </div>
    </>
  )
}

export default SearchCarSection
