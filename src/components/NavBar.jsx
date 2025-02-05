import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

function NavBar({ logo, buttonBgColor, textColor, buttontext }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="flex justify-between items-center lg:pl-20 p-10 w-full absolute top-0 left-0 z-50">
        {/* Dynamic Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-10 text-[18px] font-400" style={{ color: textColor }}>
          <li className="cursor-pointer">
            <Link to="/about-us" className="hover:underline" style={{ color: textColor }}>About Us</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/services" className="hover:underline" style={{ color: textColor }}>Services</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/portfolio" className="hover:underline" style={{ color: textColor }}>Portfolio</Link>
          </li>
          <li>
            <button
              onClick={() => navigate('/contact-us')}
              style={{ backgroundColor: buttonBgColor, color: buttontext }}
              className="text-[18px] font-400 rounded-full py-2 px-6 cursor-pointer hover:opacity-80 transition"
            >
              Contact Us
            </button>
          </li>
        </ul>

        {/* Mobile/Tablet Navigation Icon */}
        <div className="lg:hidden flex items-center">
          {isMenuOpen ? (
            <X className="w-8 h-8" style={{ color: textColor }} onClick={toggleMenu} />
          ) : (
            <Menu className="w-8 h-8" style={{ color: textColor }} onClick={toggleMenu} />
          )}
        </div>
      </nav>

      {/* Mobile/Tablet Navigation */}
      <nav
        className={`lg:hidden font-400 sm:hidden absolute top-20 left-0 w-full transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-20 " style={{ color: textColor }}>
          <li>
            <Link to="/about-us" className="hover:underline" style={{ color: textColor }}>About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline" style={{ color: textColor }}>Services</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:underline" style={{ color: textColor }}>Portfolio</Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/contact-us');
              }}
              style={{ backgroundColor: buttonBgColor, color: buttontext }}
              className="text-black font-400 rounded-full py-2 px-6 hover:opacity-80"
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
