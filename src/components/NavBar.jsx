import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
    function Homenavigate(){
      navigate('/')
    }
    function ContactUsnavigate(){
      navigate('/contact-us')
    }
  
  return (
    <>
      <nav className="flex justify-between items-center p-8 w-full fixed top-0 left-0 z-50">
        <img src="/Logo.svg" alt="Logo" className="h-12 w-72 cursor-pointer" onClick={Homenavigate} />
        <ul className="flex justify-end w-full items-center gap-8 pr-12 text-[#FFFFFF] text-[18px] font-Inter">
        <li className="cursor-pointer" ><Link to="/about-us" className="hover:underline">About Us</Link></li>
        <li className="cursor-pointer" ><Link to="/services" className="hover:underline">Services</Link></li>
        <li className="cursor-pointer" ><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
        <li>
          <button onClick={ContactUsnavigate} className="bg-[#FFFFFF4D] text-white rounded-full py-2 px-6 cursor-pointer">
            Contact Us
          </button>
        </li>
      </ul>
      </nav>
    </>
  );
}

export default NavBar;
