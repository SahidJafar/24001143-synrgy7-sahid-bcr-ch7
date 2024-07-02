import { useContext, useEffect } from "react"
import { CarsContext } from "../../../context/carsProvider"

const SearchCarSection: React.FC = () => {
  const { fetchCarsPublic } = useContext(CarsContext)!

  useEffect(() => {
    fetchCarsPublic()
  })
  const cars = [
    {
      image: "https://example.com/car1.jpg",
      model: "Model Car 1",
      price: "Rp 10000 / hari",
      description: "Deskripsi mobil 1",
      passengers: 4,
      transmission: "manual",
      year: 2020,
    },
    // Add more car objects as needed
  ]

  return (
    <>
      <section id="search-car" className="relative mb-96 lg:mb-20">
        <div className="absolute top-0 left-0 right-0 px-6 mx-auto mt-[-10px] lg:w-[1047px] lg:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-white rounded-lg shadow-md p-6">
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Tipe Driver</p>
              <select name="driver-type" id="driver-type" className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 mt-2 px-2">
                <option value="" disabled selected>
                  Pilih Tipe Driver
                </option>
                <option value="dengan-sopir">Dengan Sopir</option>
                <option value="tanpa-sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Tanggal</p>
              <input type="date" id="date" name="date" className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2" />
            </div>
            <div className="mb-4 lg:mb-0">
              <p className="font-light text-sm mb-2">Waktu Jemput/Ambil</p>
              <select name="pickup-time" id="pickup-time" className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2">
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
                <input type="number" id="total-passenger" name="total-passenger" className="text-neutral-03 border border-gray-300 rounded-sm w-full md:w-52 h-9 px-2" />
              </div>
            </div>
            <div>
              <p className="font-light text-sm mb-6"></p>
              <button id="search-btn" className="bg-green-500 h-9 hover:bg-green-600 text-white rounded px-4" type="submit">
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-8" id="cars-container">
          {cars.map((car, index) => (
            <div key={index} className="flex flex-col lg:w-[333px] w-[250px] mx-auto p-6 bg-white border rounded-lg shadow-sm">
              <div
                className="w-full h-56 md:w-72 mb-3"
                style={{
                  backgroundImage: `url(${car.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="font-semibold text-sm mb-2">{car.model}</p>
              <p className="font-bold text-base mb-2">{car.price}</p>
              <p className="font-light text-sm mb-3">{car.description}</p>
              <ul className="font-light text-sm leading-2 flex flex-wrap gap-4 mb-6">
                <li className="flex w-full items-center">
                  <i data-feather="users" className="text-neutral-03 stroke-[1px] mr-2"></i>
                  {car.passengers} orang
                </li>
                <li className="flex w-full items-center">
                  <i data-feather="settings" className="text-neutral-03 stroke-[1px] mr-2"></i>
                  {car.transmission}
                </li>
                <li className="flex w-full items-center">
                  <i data-feather="calendar" className="text-neutral-03 stroke-[1px] mr-2"></i>Tahun {car.year}
                </li>
              </ul>
              <button className="bg-[#0D28A6] w-full h-12 font-bold text-sm text-white mt-auto">Pilih Mobil</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SearchCarSection
