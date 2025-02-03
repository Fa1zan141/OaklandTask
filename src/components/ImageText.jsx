import React from 'react';

function ImageText({ text, span, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-col lg:flex-row items-end justify-center gap-10">
      {/* Dynamic Text */}
      <p className="w-[820px] lg:w-[520px] text-[#A6A6AB] text-[14px] lg:text-base mb-4 lg:mb-0 text-right">
        {text}
        <br />
        {span}
      </p>
      
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full lg:w-[700px] rounded-lg shadow-lg"
      />
    </div>
  );
}

export default ImageText;
