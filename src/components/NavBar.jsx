import React, { useState } from 'react';

function NavBar() {

  return (
    <>
      <nav className="flex justify-between items-center p-8 w-full fixed top-0 left-0 z-50">
        <img src="/Logo.svg" alt="Logo" className="h-12 w-72" />
        <ul className="flex justify-end w-full items-center gap-8 pr-12 text-[#FFFFFF] text-[18px] font-Inter">
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Portfolio</li>
        <li>
          <button className="bg-[#FFFFFF4D] text-white rounded-full py-2 px-6 cursor-pointer">
            Contact Us
          </button>
        </li>
      </ul>
      </nav>
    </>
  );
}

export default NavBar;
