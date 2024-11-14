"use client"
import { useState } from 'react';
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu when hamburger icon is clicked
  };

  return (
    <header className="bg-[#0c1e2b] py-5 px-6 md:px-12 sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        
        {/* Logo */}
        <Link href="#" className="text-[#00bcd4] text-2xl font-semibold ">
         G<span className='text-white'>hazala</span>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="#home" className="text-[#00bcd4] hover:text-white">Home</Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-[#00bcd4]">About</Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-[#00bcd4]">Skills</Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-[#00bcd4]">Contact</Link>
          </li>
        </ul>
        
        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}  {/* Toggle between open/close icons */}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <li>
            <Link href="#home" className="text-[#00bcd4] hover:text-white" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="#about" className="text-white hover:text-[#00bcd4]" onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-[#00bcd4]" onClick={toggleMenu}>Skills</Link>
          </li>
          <li>
            <Link href="#contact" className="text-white hover:text-[#00bcd4]" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
