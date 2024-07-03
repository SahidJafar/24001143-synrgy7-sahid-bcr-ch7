import { Link } from "react-router-dom"

interface SidebarProps {
  aside2Visible: boolean
  asideMenuVisible: boolean
  toggleAsideMenu: () => void
  title: string
  subTitle: string
  linkSubTitle: string
}

const Sidebar: React.FC<SidebarProps> = ({ aside2Visible, asideMenuVisible, toggleAsideMenu, title, subTitle, linkSubTitle }) => {
  return (
    <>
      {/* Aside 1 */}
      <aside id="aside1" className="hidden md:flex w-16 md:flex-col items-center overflow-auto bg-[#0D28A6] pb-4 h-screen">
        <div className="flex h-16 w-full items-center justify-center">
          <div className="h-8 w-8 bg-[#CFD4ED]"></div>
        </div>
        <Link to={"/admin/dashboard"} className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]">
          <i data-feather="home" className="text-white"></i>
          <p className="text-white text-xs font-bold">Dashboard</p>
        </Link>
        <Link to={"/admin/cars"} className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]">
          <i data-feather="truck" className="text-white"></i>
          <p className="text-white text-xs font-bold">Cars</p>
        </Link>
      </aside>
      {/* /Aside 1 */}

      {/* Aside 2 */}
      {aside2Visible && (
        <aside id="aside2" className="hidden md:flex w-56 md:flex-col items-center overflow-auto h-screen shadow-md">
          <div className="flex h-16 w-full px-5 py-5">
            <div className="h-[34px] w-[100px] bg-[#CFD4ED]"></div>
          </div>
          <div className="mt-4 flex h-16 w-full flex-col justify-center">
            <p className="mx-5 text-[#8A8A8A] font-bold">{title}</p>
          </div>
          <Link to={linkSubTitle} className="mt-4 flex h-16 w-full flex-col justify-center rounded hover:bg-[#CFD4ED]">
            <p className="mx-5 font-bold text-[#151515]">{subTitle}</p>
          </Link>
        </aside>
      )}
      {/* /Aside 2 */}

      {/* Aside Mobile */}
      {asideMenuVisible && (
        <aside id="asideMenu" className={`fixed inset-0 z-50 ${asideMenuVisible ? "" : "hidden"} h-full w-full`}>
          <div className="absolute inset-y-0 right-0 w-2/5 bg-black text-white opacity-25"></div>
          <div className="absolute inset-y-0 left-0 w-3/5 flex flex-row">
            <div className="flex w-32 flex-col items-center overflow-auto bg-[#0D28A6] pb-4">
              <div className="flex h-16 w-full items-center justify-center">
                <div className="h-8 w-8 bg-[#CFD4ED]"></div>
              </div>
              <a href="/admin/dashboard" className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]">
                <i data-feather="home" className="text-white"></i>
                <p className="text-white text-xs font-bold">Dashboard</p>
              </a>
              <Link to={"/admin/cars"} className="mt-4 flex h-16 w-full flex-col items-center justify-center rounded hover:bg-[#CFD4ED]">
                <i data-feather="truck" className="text-white"></i>
                <p className="text-white text-xs font-bold">Cars</p>
              </Link>
            </div>
            <div className="flex w-72 flex-col items-center overflow-auto bg-white">
              <div className="flex h-16 w-full px-5 py-5">
                <div className="h-[34px] w-[100px] bg-[#CFD4ED]"></div>
                <button onClick={toggleAsideMenu} type="button" className="block md:hidden ml-5">
                  <i data-feather="x" className="text-lg font-bold"></i>
                </button>
              </div>
              <div className="mt-4 flex h-16 w-full flex-col justify-center">
                <p className="mx-5 text-[#8A8A8A] font-bold">{title}</p>
              </div>
              <Link to={linkSubTitle} className="mt-4 flex h-16 w-full flex-col justify-center rounded hover:bg-[#CFD4ED]">
                <p className="mx-5 font-bold text-[#151515]">{subTitle}</p>
              </Link>
            </div>
          </div>
        </aside>
      )}
      {/* /Aside Mobile */}
    </>
  )
}

export default Sidebar
