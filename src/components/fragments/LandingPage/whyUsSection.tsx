import feather from "feather-icons"
import { useEffect } from "react"
const WhyUsSection: React.FC = () => {
  useEffect(() => {
    feather.replace()
  }, [])
  return (
    <section id="why" className="py-10">
      <div className="container flex flex-col mx-auto px-12">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="font-bold text-2xl text-black">Why Us?</h1>
          <p className="text-sm font-light text-black">Mengapa harus pilih Binar Car Rental?</p>
        </div>
        <div className="grid grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-4 mt-10">
          <div className="rounded-lg border space-y-2 p-8 border-neutral-300">
            <i data-feather="thumbs-up" className="rounded-full w-[32px] h-[32px] bg-[#F9CC00] text-white p-1"></i>
            <h2 className="text-base font-bold text-black">Mobil Lengkap</h2>
            <p className="text-sm font-light text-black">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
          </div>
          <div className="rounded-lg border space-y-2 p-8 border-neutral-300">
            <i data-feather="tag" className="rounded-full w-[32px] h-[32px] bg-[#FA2C5A] text-white p-1"></i>
            <h2 className="text-base font-bold text-black">Harga Murah</h2>
            <p className="text-sm font-light text-black">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
          </div>
          <div className="rounded-lg border space-y-2 p-8 border-neutral-300">
            <i data-feather="clock" className="rounded-full w-[32px] h-[32px] bg-[#0D28A6] text-white p-1"></i>
            <h2 className="text-base font-bold text-black">Layanan 24 Jam</h2>
            <p className="text-sm font-light text-black">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
          </div>
          <div className="rounded-lg border space-y-2 p-8 border-neutral-300">
            <i data-feather="award" className="rounded-full w-[32px] h-[32px] bg-[#5CB85F] text-white p-1"></i>
            <h2 className="text-base font-bold text-black">Sopir Profesional</h2>
            <p className="text-sm font-light text-black">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
