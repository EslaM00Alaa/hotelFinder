"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHotel, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Correct import

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-5 px-6 lg:px-24 flex justify-between items-center bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="p-4 bg-[#212121] text-[#f5f5f5] w-fit rounded-full">
          <FaHotel size={24} />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex w-6/12 justify-between items-center">
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/"}>
          Home
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/hotels"}>
          Hotels
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/abouts"}>
          About Us
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/contact"}>
          Contact Us
        </Link>
      </div>

      {/* Sign In Button (Desktop) */}
      <div className="hidden lg:flex">
        <button className="px-6 text-lg bg-black py-3 rounded-full text-white">
          SIGN IN
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#212121]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 space-y-6 transition-all">
          <Link className="text-lg text-gray-700 font-semibold" to={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/hotels"} onClick={() => setMenuOpen(false)}>
            Hotels
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/abouts"} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/contact"} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <button className="px-6 text-lg bg-black py-3 rounded-full text-white w-fit" onClick={() => setMenuOpen(false)}>
            SIGN IN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
