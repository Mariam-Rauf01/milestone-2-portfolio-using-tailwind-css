"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#694953] fixed w-full z-10" role="navigation">
        <nav className="flex justify-between items-center md:px-12 px-6 py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-[#f8f2de] lusitana">
            <h1>Mariam Rauf</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li className="text-[#f8f2de] hover:text-red-400 transition-colors duration-200 ease-in-out inter">
              <Link href="#home">Home</Link>
            </li>
            <li className="text-[#f8f2de] hover:text-red-400 transition-colors duration-200 ease-in-out inter">
              <Link href="#about">About</Link>
            </li>
            <li className="text-[#f8f2de]  hover:text-red-400 transition-colors duration-200 ease-in-out inter">
              <Link href="#skill">Skills</Link>
            </li>
            <li className="text-[#f8f2de]  hover:text-red-400 transition-colors duration-200 ease-in-out inter">
              <Link href="#project">Projects</Link>
            </li>
            <li className="text-[#f8f2de]  hover:text-red-400 transition-colors duration-200 ease-in-out inter">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-[#f3e7c3] p-2 rounded-md cursor-pointer hover:bg-red-400"
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
            tabIndex={0}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <IoCloseSharp size={30} /> : <GiHamburgerMenu size={30} />}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul 
            className="flex flex-col items-center md:hidden bg-[#694953] text-[#f3e7c3] font-bold text-lg py-6 space-y-4"
            aria-hidden={!isMenuOpen}
          >
            <li><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="#skill" onClick={toggleMenu}>Skills</Link></li>
            <li><Link href="#project" onClick={toggleMenu}>Projects</Link></li>
            <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
