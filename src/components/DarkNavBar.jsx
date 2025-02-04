import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import Lucid's Menu and X icons

function DarkNavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  function Homenavigate() {
    navigate('/');
  }

  function ContactUsnavigate() {
    navigate('/contact-us');
  }

  // Toggle the mobile menu visibility
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="flex justify-between items-center p-8 w-full absolute top-0 left-0 z-50">
        {/* Logo */}
        <img
          src="/DarkLogo.svg"
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={Homenavigate}
        />

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 lg:gap-10 text-[#212529] text-[18px] font-Inter">
          <li className="cursor-pointer">
            <Link to="/about-us" className="hover:underline">About Us</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/services" className="hover:underline">Services</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <button
              onClick={ContactUsnavigate}
              className="bg-[#212529] text-white rounded-full py-2 px-6 cursor-pointer hover:bg-[#333] transition"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-8 h-8 text-[#212529]" />
          ) : (
            <Menu className="w-8 h-8 text-[#212529]" />
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden absolute top-20 left-0 w-full transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-20 text-[#212529]">
          <li>
            <Link to="/about-us" className="hover:underline">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline">Portfolio</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false); 
                ContactUsnavigate();
              }}
              className="bg-[#212529] text-white rounded-full py-2 px-6 hover:bg-[#333] transition"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DarkNavBar;
