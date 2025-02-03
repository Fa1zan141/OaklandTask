import React from 'react';

function Text({ paragraph1, paragraph2,paragraph3, paragraph4 }) {
  return (
    <>
      <p className="w-full sm:w-[700px] text-[#212529] text-[16px] sm:text-[18px] font-400 mx-auto sm:ml-[200px] lg:ml-0 pt-6">
        {paragraph1}
      </p>
      <p className="w-full sm:w-[700px] text-[#212529] text-[16px] sm:text-[18px] font-400 mx-auto sm:ml-[200px] lg:ml-0 pt-6">
        {paragraph2}
      </p>
      <div className='flex flex-col mr-20'>
      <p className="w-[600px] sm:w-[700px] text-[#212529] text-[16px] sm:text-[18px] font-400 mx-auto sm:ml-[200px] lg:ml-0 pt-6">
        {paragraph3}
      </p>
      <p className=" sm:w-[700px] text-[#212529] text-[16px] sm:text-[18px] font-400 mx-auto sm:ml-[200px] lg:ml-0 pt-6">
        {paragraph4}
      </p>
      </div>
      
    </>
  );
}

export default Text;
