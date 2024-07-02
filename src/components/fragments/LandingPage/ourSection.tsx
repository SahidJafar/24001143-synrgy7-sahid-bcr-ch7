import { useEffect } from "react"
import feather from "feather-icons"
import serviceImg from "../../../assets/images/img_service.png"

const OurSection: React.FC = () => {
  useEffect(() => {
    feather.replace()
  }, [])
  return (
    <section id="our" className="py-10">
      <div className="container  md:w-full w-11/12 flex flex-wrap justify-center items-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="lg:w-1/2 max-xl:px-12 mb-10">
          <img src={serviceImg} alt="Car" className="ml-auto mt-0" />
        </div>
        <div className="lg:w-1/2 lg:pl-40">
          <h1 className="lg:max-w-md text-2xl leading-[36px] font-bold sm:max-w-lg sm:mb-10">Best Car Rental for any kind of trip in (Lokasimu)!</h1>
          <p className="font-light text-sm leading-5 my-4">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata bisnis, wedding, meeting, dll.
          </p>
          <ul className="text-sm font-normal text-black space-y-4">
            <li className="flex gap-4">
              <i data-feather="check" className="bg-[#CFD4ED] text-[#0D28A6] rounded-full p-1 stroke-[3px]"></i>
              <span>Sewa Mobil Dengan Supir di Bali 12 Jam </span>
            </li>
            <li className="flex gap-4">
              <i data-feather="check" className="bg-[#CFD4ED] text-[#0D28A6] rounded-full p-1 stroke-[3px]"></i>
              <span>Sewa Mobil Lepas Kunci di Bali 24 Jam </span>
            </li>
            <li className="flex gap-4">
              <i data-feather="check" className="bg-[#CFD4ED] text-[#0D28A6] rounded-full p-1 stroke-[3px]"></i>
              <span> Sewa Mobil Jangka Panjang Bulanan </span>
            </li>
            <li className="flex gap-4">
              <i data-feather="check" className="bg-[#CFD4ED] text-[#0D28A6] rounded-full p-1 stroke-[3px]"></i>
              <span> Gratis Antar - Jemput Mobil di Bandara </span>
            </li>
            <li className="flex gap-4">
              <i data-feather="check" className="bg-[#CFD4ED] text-[#0D28A6] rounded-full p-1 stroke-[3px]"></i>
              <span> Layanan Airport Transfer / Drop In Out </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurSection
