import React from 'react';

function ImageText({ text, span, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col lg:flex-row items-end justify-center gap-10 px-4 sm:px-10 lg:px-16">

      <p className="w-full lg:w-[520px] text-[#A6A6AB] text-[14px] sm:text-base mb-4 lg:mb-0 text-center lg:text-right">
        {text}
        <br />
        <span className="text-[#A6A6AB] ">{span}</span>
      </p>
      
      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full max-w-[700px] lg:w-[700px] rounded-lg shadow-lg object-cover"
      />
    </div>
  );
}

export default ImageText;
