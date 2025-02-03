import React from 'react'
import { useNavigate } from 'react-router-dom';
function Button() {
  const navigate = useNavigate();
  function portfolionavigate(){
    navigate('/portfolio');
  }
  return (
    <>
    <button onClick={portfolionavigate} className='bg-white text-[#212529] rounded-full w-40 h-12'>View Our Portfolio</button>
    </>
  )
}

export default Button