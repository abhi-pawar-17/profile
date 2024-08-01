import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div>
          <h1 className="text-red-600 text-3xl font-bold">
            My<span className="text-white">Portfolio</span>
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 text-white list-none">
          <a href="#Home" className="relative group">
            <li className="hover:text-red-600 transition duration-300">Home</li>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#About" className="relative group">
            <li className="hover:text-red-600 transition duration-300">About</li>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#skills" className="relative group">
            <li className="hover:text-red-600 transition duration-300">Skills</li>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Gallery" className="relative group">
            <li className="hover:text-red-600 transition duration-300">Gallery</li>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#Contact" className="relative group">
            <li className="hover:text-red-600 transition duration-300">Contact</li>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 py-6 h-full">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
          <a href="#Home" onClick={toggleMenu} className="text-white text-2xl hover:text-red-600 transition duration-300">
            Home
          </a>
          <a href="#About" onClick={toggleMenu} className="text-white text-2xl hover:text-red-600 transition duration-300">
            About
          </a>
          <a href="#skills" onClick={toggleMenu} className="text-white text-2xl hover:text-red-600 transition duration-300">
            Skills
          </a>
          <a href="#Gallery" onClick={toggleMenu} className="text-white text-2xl hover:text-red-600 transition duration-300">
            Gallery
          </a>
          <a href="#Contact" onClick={toggleMenu} className="text-white text-2xl hover:text-red-600 transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
