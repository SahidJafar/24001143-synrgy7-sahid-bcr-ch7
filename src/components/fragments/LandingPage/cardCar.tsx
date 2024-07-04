import { ICars } from "../../../context/carsProvider"

interface CardCarProps {
  carsPublic: ICars[] | null
}
const CardCar: React.FC<CardCarProps> = ({ carsPublic }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-8" id="cars-container">
        {carsPublic?.length === 0 ? (
          <div className="flex items-center justify-center h-[200px]">
            <p className="text-lg font-bold">Mobil tidak ditemukan</p>
          </div>
        ) : (
          carsPublic?.map((car, index) => (
            <div key={index} className="flex flex-col lg:w-[333px] w-[250px] mx-auto p-6 bg-white border rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-[200px] h-[150px] lg:w-[300px] lg:h-[200px]">
                <img src={car.image || ""} className="object-cover" alt={car.model} />
              </div>
              <p className="font-semibold text-sm mb-2">
                {car.manufacture} {""}
                {car.model}
              </p>
              <p className="font-bold text-base mb-2"> Rp. {car.rent_per_day.toLocaleString("id-ID")} / Hari</p>
              <p className="font-light text-sm mb-3">{car.description}</p>
              <ul className="font-light text-sm leading-2 flex flex-wrap gap-4 mb-6">
                <li className="flex w-full items-center">
                  <i data-feather="users" className="text-neutral-03 stroke-[1px] mr-2"></i>
                  {car.capacity} orang
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
          ))
        )}
      </div>
    </>
  )
}

export default CardCar
