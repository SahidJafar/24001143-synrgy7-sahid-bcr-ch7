import { Link } from "react-router-dom"

const GettingStartedSection: React.FC = () => {
  return (
    <section id="getting-started" className="py-10">
      <div className="flex h-full w-full justify-center items-center">
        <div className="container md:w-3/4 w-11/12">
          <div className="bg-[#0D28A6] min-h-[326px] rounded-xl space-y-8 py-16  flex flex-col items-center text-center">
            <h1 className="text-4xl text-white font-bold">Sewa Mobil di (Lokasimu) Sekarang</h1>
            <div className="text-center w-full flex justify-center ">
              <p className="text-white text-sm w-[60%] font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <Link to={"/cars"}>
              <button className="bg-[#5CB85F] w-[140px] h-[36px] text-xs font-bold rounded-sm text-white px-3 py-2">Mulai Sewa Mobil</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStartedSection
