import feather from "feather-icons"
import { useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/bundle"
import { Navigation } from "swiper/modules"
import image1 from "../../../assets/images/img_photo_1.png"
import image2 from "../../../assets/images/img_photo_2.png"

const TestimonialSection: React.FC = () => {
  useEffect(() => {
    feather.replace()
  }, [])
  return (
    <section id="testimonial" className="py-5">
      <div className="overflow-hidden relative flex flex-col md:px-0 items-center mt-[60px] md:mt-24 mb-24">
        <div className="space-y-5 text-center">
          <h1 className="font-bold text-2xl text-black">Testimonial</h1>
          <p className="text-sm font-light text-black">Berbagai review positif dari para pelanggan kami</p>
        </div>
        {/* Swiper  xl*/}
        <Swiper
          direction="horizontal"
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper hidden xl:flex h-[300px] w-full"
        >
          <SwiperSlide className="swiper-slide flex flex-row items-center bg-[#F1F3FF] rounded-[8px] p-[46px] gap-[46px]">
            <img src={image1} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <p className="font-light text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="font-normal text-sm">John Dee 32, Bromo</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-row items-center bg-[#F1F3FF] rounded-[8px] p-[46px] gap-[46px]">
            <img src={image2} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <p className="font-light text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="font-normal text-sm">John Dee 32, Bromo</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-row items-center bg-[#F1F3FF] rounded-[8px] p-[46px] gap-[46px]">
            <img src={image1} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <p className="font-light text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="font-normal text-sm">John Dee 32, Bromo</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-row items-center bg-[#F1F3FF] rounded-[8px] p-[46px] gap-[46px]">
            <img src={image1} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <p className="font-light text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
              </p>
              <p className="font-normal text-sm">John Dee 32, Bromo</p>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Swiper  Mobile*/}
        <Swiper
          direction="horizontal"
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={32}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="swiper flex xl:hidden h-max w-full"
        >
          <SwiperSlide className="swiper-slide flex flex-col items-center bg-[#F1F3FF] rounded-[8px] gap-6 p-[46px]">
            <img src={image1} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-6 items-center text-sm">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-light">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-normal">John Dee 32, Bromo</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-col items-center bg-[#F1F3FF] rounded-[8px] gap-6 p-[46px]">
            <img src={image2} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-6 items-center text-sm">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-light">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-normal">John Dee 32, Bromo</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-col items-center bg-[#F1F3FF] rounded-[8px] gap-6 p-[46px]">
            <img src={image1} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-6 items-center text-sm">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-light">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-normal">John Dee 32, Bromo</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide flex flex-col items-center bg-[#F1F3FF] rounded-[8px] gap-6 p-[46px]">
            <img src={image2} className="h-20 w-20 object-cover rounded-full" alt="" />
            <div className="flex flex-col gap-6 items-center text-sm">
              <div className="flex flex-row items-center">
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
                <i data-feather="star" className="text-[#F9CC00] fill-[#F9CC00] stroke-0"></i>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-light">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <p className="font-normal">John Dee 32, Bromo</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="slider-controler mt-6 w-full flex justify-center gap-6">
          <button className="swiper-button-prev mx-4 border rounded-full border-btn hover:bg-green-600">
            <i data-feather="chevron-left" className="p-1 text-black hover:text-white"></i>
          </button>
          <button className="swiper-button-next mx-4 border rounded-full border-btn hover:bg-green-600">
            <i data-feather="chevron-right" className="p-1 text-black hover:text-white"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
