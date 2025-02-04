import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex justify-between items-center p-8 w-full absolute top-0 left-0 z-50">
        {/* Logo */}
        <img
          src="/Logo.svg"
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 text-white text-lg">
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
              onClick={() => navigate('/contact-us')}
              className="bg-white text-black rounded-full py-2 px-6 cursor-pointer hover:bg-gray-200 transition"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile/Tablet Navigation Icon */}
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <X className="w-8 h-8 text-white" onClick={toggleMenu} />
          ) : (
            <Menu className="w-8 h-8 text-white" onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {/* Mobile/Tablet Navigation */}
      <nav
        className={`lg:hidden sm:hidden absolute top-20 left-0 w-full transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-20 text-white">
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
                navigate('/contact-us');
              }}
              className="bg-white text-black rounded-full py-2 px-6 hover:bg-gray-200"
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
