import { useState, useEffect, useContext } from "react"
import feather from "feather-icons"
import { AuthContext } from "../../../context/authProvider"
import { Link } from "react-router-dom"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State untuk dropdown menu
  const { auth, logoutUser } = useContext(AuthContext)!

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen) // Toggle state dropdown menu
  }

  const handleLogout = () => {
    logoutUser()
  }

  useEffect(() => {
    feather.replace()
  }, [isMenuOpen])

  return (
    <header>
      {/* Header Navbar */}
      <nav className="start-0 top-0 z-20 flex w-full justify-center bg-[#f1f3ff]">
        <div className="container md:w-3/4 w-11/12">
          <div className="my-8 flex h-9 items-center justify-between py-4">
            <div className="bg-[#0d28a6] h-9 w-[100px]"></div>
            <div className="hidden items-center space-x-0 md:flex md:space-x-4 lg:space-x-8">
              <ul className="flex space-x-0 md:space-x-4 lg:space-x-8">
                <li>
                  <a href="#our" className="">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#why" className="">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="#testimonial" className="">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#faq" className="">
                    FAQ
                  </a>
                </li>
              </ul>
              {auth ? (
                <div className="flex md:space-x-3 space-x-1 space-y-2 items-start relative">
                  <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
                    <p className="font-bold md:text-base text-sm text-center py-2">{auth.name[0]}</p>
                  </div>
                  <p className="font-bold text-center">{auth.name}</p>
                  <button onClick={toggleDropdown}>
                    <i data-feather="chevron-down"></i>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute bg-[#f1f3ff] right-2 top-10 w-28 rounded shadow-md z-50">
                      {(auth.role === "admin" || auth.role === "superadmin") && (
                        <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                          <Link to={"/admin/dashboard"} className="block px-5 py-2">
                            Dashboard
                          </Link>
                        </li>
                      )}
                      <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                        <button className="block px-5 py-2" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link to="/register">
                  <button type="button">
                    <div className="bg-[#5cb85f] rounded-md px-3 py-2 text-white">Register</div>
                  </button>
                </Link>
              )}
            </div>
            <button onClick={toggleMenu} type="button" className="block md:hidden">
              <i data-feather="menu" className="text-sm font-bold"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <menu id="menu" className="fixed inset-0 z-50 h-full w-full">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-black text-white opacity-60"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-white">
            <div className="m-8 flex items-start justify-between">
              <div className="space-y-4">
                <h1 className="text-sm font-bold">BCR</h1>
                <ul className="space-y-4">
                  <li>
                    <a href="#our" className="">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#why" className="">
                      Why Us
                    </a>
                  </li>
                  <li>
                    <a href="#testimonial" className="">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="">
                      FAQ
                    </a>
                  </li>
                </ul>
                {auth ? (
                  <div className="space-y-2 ">
                    {(auth.role === "admin" || auth.role === "superadmin") && (
                      <Link to={"/admin/dashboard"}>
                        <button type="button">
                          <div className="bg-[#5cb85f] rounded-sm px-3 py-2 text-white">Dashboard</div>
                        </button>
                      </Link>
                    )}
                    <button type="button">
                      <div className="bg-red-500 rounded-sm px-3 py-2 text-white" onClick={handleLogout}>
                        Logout
                      </div>
                    </button>
                  </div>
                ) : (
                  <Link to={"/register"}>
                    <button type="button">
                      <div className="bg-[#5cb85f] rounded-sm px-3 py-2 text-white">Register</div>
                    </button>
                  </Link>
                )}
              </div>
              <button onClick={toggleMenu} type="button" className="block md:hidden">
                <i data-feather="x" className="text-sm font-bold"></i>
              </button>
            </div>
          </div>
        </menu>
      )}
    </header>
  )
}

export default Navbar
