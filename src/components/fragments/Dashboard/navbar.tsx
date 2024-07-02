import React, { useContext, useState } from "react"
import { AuthContext } from "../../../context/authProvider"
import { Link } from "react-router-dom"

interface NavbarProps {
  handleMenuButtonClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ handleMenuButtonClick }) => {
  const { auth, logoutUser } = useContext(AuthContext)!
  const [isDropdownOpen, setIsDropdownOpen] = useState(false) // State untuk dropdown menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen) // Toggle state dropdown menu
  }

  const handleLogout = () => {
    logoutUser()
  }

  return (
    <nav className="flex justify-between items-center flex-shrink-0 h-16 md:px-8 px-2 shadow-md">
      <button onClick={handleMenuButtonClick}>
        <i data-feather="menu"></i>
      </button>
      <div className="flex flex-row md:space-x-3 space-x-1">
        <div className="flex flex-row">
          <div className="relative">
            <input
              className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors md:w-[174px] w-28 h-[38px] py-2 px-3 text-gray-800 leading-tight focus:outline-none text-xs"
              id="username"
              type="text"
              placeholder="Search..."
            />
            <div className="absolute left-0 inset-y-0 flex items-center">
              <i data-feather="search" className="md:h-6 md:w-6 h-3 w-3 ml-3 text-gray-400 hover:text-gray-500"></i>
            </div>
          </div>
          <button className="flex items-center md:px-2 px-0 text-[#0D28A6] border border-[#0D28A6] rounded-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-bold">
            <p className="text-sm md:text-md">Search</p>
          </button>
        </div>
        <div className="flex md:space-x-3 space-x-1 space-y-2 items-start">
          <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
            <p className="font-bold md:text-base text-xs text-center py-2">{auth?.name[0]}</p>
          </div>
          <p className="font-bold text-center hidden lg:flex">{auth?.name}</p>
          <button onClick={toggleDropdown}>
            <i data-feather="chevron-down"></i>
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-[#f1f3ff] right-8 top-10 w-30 rounded shadow-md z-50">
              <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                <Link to={"/"} className="block px-5 py-2">
                  Landing Page
                </Link>
              </li>
              <li className="mb-1 hover:bg-gray-50 text-gray-700 hover:text-gray-900">
                <button className="block px-5 py-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
