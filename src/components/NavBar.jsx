import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Import Lucid's Menu icon

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Navigation functions
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
          src="/Logo.svg"
          alt="Logo"
          className="h-12 w-72 cursor-pointer"
          onClick={Homenavigate}
        />

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          <Menu className="w-8 h-8 text-white" /> 
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row items-center gap-8 lg:gap-10 text-white text-[18px] font-Inter`}
        >
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
              className="bg-[#FFFFFF4D] text-white rounded-full py-2 px-6 cursor-pointer"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
