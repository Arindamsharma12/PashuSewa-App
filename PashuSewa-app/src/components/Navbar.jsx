import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from '../images/Pashu_Sewa_Logo.png'
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-2xl border-b border-gray-800 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col w-auto items-center">
          <img src={logo} alt="Pashu Sewa" className="h-15 mr-2" />
          <span className="text-gray-800 font-bold text-xl">PASHU SEWA</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-orange-600 font-semibold text-lg">
          <li><a href="/" className=" hover:border-b-2 border-orange-400 hover:text-orange-400">Home</a></li>
          <li><a href="/about" className="hover:border-b-2 border-orange-400 hover:text-orange-400">About us</a></li>
          
          {/* Services Dropdown */}
          <li className="relative hover:border-b-2 border-orange-400">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center hover:text-orange-400"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white border border-orange-300 rounded shadow-md w-50 text-orange-600">
                <li><a href="/report" className="block px-4 py-2 hover:bg-orange-100">Animal Report</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-orange-100">Service 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-orange-100">Service 3</a></li>
              </ul>
            )}
          </li>
          
          <li><a href="#" className=" hover:border-b-2 border-orange-400hover:text-orange-400">Contact Us</a></li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="/login"><button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer">Login</button></a>
          <a href="/signup"><button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer">Sign up</button></a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-orange-600" /> : <Menu className="w-6 h-6 text-orange-600" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white p-4 mt-2 space-y-4 text-center text-orange-600 shadow-md border-t">
          <li><a href="/" className="block py-2 hover:text-orange-400">Home</a></li>
          <li><a href="/about" className="block py-2 hover:text-orange-400">About us</a></li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex justify-center w-full py-2 hover:text-orange-400"
            >
              Services <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {dropdownOpen && (
              <ul className="bg-white border border-orange-300 mt-2 rounded shadow-md">
                <li><a href="/report" className="block px-4 py-2 hover:bg-orange-100">Animal Report</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-orange-100">Service 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-orange-100">Service 3</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="block py-2 hover:text-orange-400">Contact Us</a></li>
          <li>
          <a href="/login"><button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer">Login</button></a>
          </li>
          <li>
            <a href="/signup"><button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 cursor-pointer">Sign up</button></a>
          </li>
        </ul>
      )}
    </nav>
  );
}
