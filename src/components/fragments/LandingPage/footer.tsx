import feather from "feather-icons"
import { useEffect } from "react"

const Footer: React.FC = () => {
  useEffect(() => {
    feather.replace()
  }, [])

  return (
    <footer className="py-20">
      <div className="flex h-full w-full justify-center items-center">
        <div className="container md:w-3/4 w-11/12 md:flex block justify-between md:space-y-0 space-y-4">
          <div className="md:w-1/4 w-full">
            <div className="space-y-4">
              <p className="text-sm font-light text-black w-[80%] md:w-full">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p className="text-sm font-light text-black">binarcarrental@gmail.com</p>
              <p className="text-sm font-light text-black">081-233-334-808</p>
            </div>
          </div>
          <div className="w-fit">
            <div className="space-y-4 flex flex-col">
              <a href="#our" className="text-sm md:font-light font-normal text-black">
                Our Services
              </a>
              <a href="#why" className="text-sm md:font-light font-normal text-black">
                Why Us
              </a>
              <a href="#testimonial" className="text-sm md:font-light font-normal text-black">
                Testimonial
              </a>
              <a href="#faq" className="text-sm md:font-light font-normal text-black">
                FAQ
              </a>
            </div>
          </div>
          <div className="md:w-1/4 w-full">
            <div className="space-y-4">
              <p className="text-sm font-light text-black">Connect with us</p>
              <div className="flex justify-start gap-4">
                <i data-feather="facebook" className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"></i>
                <i data-feather="instagram" className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"></i>
                <i data-feather="twitter" className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"></i>
                <i data-feather="mail" className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"></i>
                <i data-feather="twitch" className="rounded-full bg-[#0D28A6] text-white p-[5px] stroke-1 w-[32px] h-[32px]"></i>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 w-full">
            <div className="space-y-4">
              <p className="text-sm font-light text-black">Copyright Binar 2022</p>
              <div className="bg-[#0D28A6] w-[100px] h-9"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
