import { Link, useLocation } from "react-router-dom"
import heroImg from "../../../assets/images/img_car.png"

const HeroSection: React.FC = () => {
  const location = useLocation()
  const isCarPage = location.pathname === "/cars"

  return (
    <section id="hero" className="py-5 h-full w-full bg-[#f1f3ff]">
      <div className="container md:w-3/4 w-11/12 flex flex-wrap items-center mx-auto justify-center md:mt-10">
        <div className="mb-4 lg:mb-0 lg:w-1/2">
          <h1 className="md:max-w-xl text-4xl leading-[54px] font-bold max-w-lg mb-5">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <p className="max-w-lg font-light text-[14px] leading-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          {!isCarPage && (
            <div className="flex mt-5 lg:justify-start">
              <Link to="/cars">
                <button type="button" className="bg-[#5cb85f] rounded-sm px-3 py-2 text-white">
                  Mulai Sewa Mobil
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="lg:w-1/2">
          <div className="lg:absolute lg:top-0 lg:right-0 lg:mt-28">
            <img src={heroImg} alt="Car" className="lg:max-w-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
