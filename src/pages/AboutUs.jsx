import React from 'react'
import DarkNavBar from '../components/DarkNavBar'
import Text from '../components/Text'
import ImageText from '../components/ImageText';
function AboutUs() {
    const paragraph1 = "Innovation has been at the heart of our journey right from the beginning. At Oakland C.E., we believe that staying at the forefront of technology and sustainable practices is essential. We’ve consistently sought innovative solutions in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to shape a brighter and greener future.";
    const paragraph2 = "Our commitment to innovation drives us to continually explore new avenues, refine our processes, and deliver pioneering results for our clients. Join us in embracing innovation as we chart a course towards a more sustainable and efficient energy landscape.";
    const paragraph3 = "From our company's inception, innovation has been ingrained in our DNA. It's not just a buzzword; it's the driving force behind everything we do. Our founders were visionaries who understood that to make a real impact in the energy sector, we needed to lead with innovation.";
    const paragraph4 = "This commitment to cutting-edge solutions has allowed us to consistently push the boundaries of what's possible in energy efficiency, LED lighting, photovoltaic energy, and electric mobility. We've fostered a culture that encourages creativity, embraces change, and thrives on challenges. As we continue to grow, our dedication to innovation remains unwavering, ensuring that we remain a trailblazer in the industry.";
  
  return (
    <>
     {/*Top Section Of About US Page*/}
     <div className="flex flex-col justify-end items-start h-screen bg-[#F4F4F4]">
      <DarkNavBar />
      <section className="flex flex-col px-6 items-start sm:px-10 md:px-20 ">
        <h1 className="text-[48px] sm:text-5xl text-[#212529] mb-12 font-400">
          About Us
        </h1>
        <p className="text-[16px] sm:text-xl text-[#424649] text-left font-400 leading-[25px] max-w-[540px] pb-[100px] sm:pb-20">
          Learn more about Oakland C.E. and our commitment to excellence, innovation, and sustainability.
        </p>
      </section>

    </div>


    {/*Second Section Of About US Page*/}
    <section>
      <div className="px-6 lg:p-20 max-w-full md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
        <h1 className="text-[28px] sm:text-[36px] md:text-[40px] text-[#424649] font-normal leading-snug max-w-3xl mb-12">
          Innovation. <br /> Guiding our journey from the start.
        </h1>

          {/* Image Section */}
        {/* Image Section */}
        <ImageText
        text="Executive Board members" 
        span= "Oakland, 2023"
        imageSrc="/AboutUsImage.svg"
        imageAlt="Executive Board Meeting"
      />
      </div>
        </div>
    <section className='flex flex-col justify-start items-start mb-20 lg:pl-20 pl-6'>
        <Text paragraph1={paragraph1} paragraph2={paragraph2} />
    </section>
    </section>
    {/*Image Section Of About US Page*/}
    <section className='flex justify-center pb-20'>
        <img src="/AboutUs.svg" alt="Image" />
    </section>
    {/*Text Section Of About US Page*/}
    <section className='flex justify-end items-end mb-20'>
    <Text paragraph3={paragraph3} paragraph4={paragraph4} />
    </section>


    </>
   
  )
}

export default AboutUs
