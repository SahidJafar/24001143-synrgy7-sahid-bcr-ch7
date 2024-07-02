const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-10">
      <div className="flex h-full w-full justify-center items-center">
        <div className="container md:w-3/4 w-11/12 md:flex block justify-between">
          <div className="md:w-1/3 w-full space-y-4 md:text-start text-center">
            <h1 className="font-bold text-2xl text-black">Frequently Asked Question</h1>
            <p className="font-light text-black text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>

          <div className="space-y-4 md:w-2/4 w-full mt-6 md:mt-0">
            <div className="relative overflow-hidden rounded-lg border shadow-sm">
              <input type="checkbox" className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0" />
              <div className="flex h-12 md:w-full w-[90%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">Apa saja syarat yang dibutuhkan?</h1>
              </div>
              <div className="absolute right-3 top-3 -rotate-90 transition-transform duration-500 peer-checked:rotate-90 md:my-0 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40">
                <div className="border-t p-5">
                  <p className="text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border shadow-sm">
              <input type="checkbox" className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0" />
              <div className="flex h-12 md:w-full w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">Berapa hari minimal sewa mobil lepas kunci?</h1>
              </div>
              <div className="absolute right-3 top-3 -rotate-90 transition-transform duration-500 peer-checked:rotate-90 md:my-0 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40">
                <div className="border-t p-5">
                  <p className="text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border shadow-sm">
              <input type="checkbox" className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0" />
              <div className="flex h-12 w-[90%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">Berapa hari sebelumnya sabaiknya booking sewa mobil?</h1>
              </div>
              <div className="absolute right-3 top-3 -rotate-90 transition-transform duration-500 peer-checked:rotate-90 md:my-0 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40">
                <div className="border-t p-5">
                  <p className="text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border shadow-sm">
              <input type="checkbox" className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0" />
              <div className="flex h-12 w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">Apakah Ada biaya antar-jemput?</h1>
              </div>
              <div className="absolute right-3 top-3 -rotate-90 transition-transform duration-500 peer-checked:rotate-90 md:my-0 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40">
                <div className="border-t p-5">
                  <p className="text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border shadow-sm">
              <input type="checkbox" className="peer absolute inset-x-0 top-0 z-10 h-12 w-full cursor-pointer opacity-0" />
              <div className="flex h-12 w-[80%] items-center pl-5 md:my-0 my-2">
                <h1 className="text-sm font-light">Bagaimana jika terjadi kecelakaan?</h1>
              </div>
              <div className="absolute right-3 top-3 -rotate-90 transition-transform duration-500 peer-checked:rotate-90 md:my-0 my-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div className="max-h-0 overflow-hidden bg-white transition-all duration-500 peer-checked:max-h-40">
                <div className="border-t p-5">
                  <p className="text-sm font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure quod odio ipsam! Natus dolorem ea laudantium vitae sit nulla, aut tempore possimus error maiores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
