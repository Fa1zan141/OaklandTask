import React, { useState } from 'react';
import Button from '../components/Button';
import HomePageSection from '../components/HomePageSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function HomePage() {
  const navigate = useNavigate();
  function ContactUsnavigate(){
    navigate('/contact-us')
  }
 

  return (
    <>
      {/* Home Page Section */}
      <section className="flex flex-col md:flex-row items-center justify-center w-full h-screen relative">
        {/* Navbar */}
        <nav className="w-full absolute top-0 bg-transparent z-20 p-8">
          <ul className="flex flex-wrap justify-end md:justify-end w-full items-center gap-6 md:gap-8 pr-8 text-white text-base md:text-lg">
            <li className="cursor-pointer" ><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li className="cursor-pointer" ><Link to="/services" className="hover:underline">Services</Link></li>
            <li className="cursor-pointer" ><Link to="/portfolio" className="hover:underline">Portfolio</Link></li>
            <li>
              <button onClick={ContactUsnavigate} className="bg-[#FFFFFF4D] text-white rounded-full py-2 px-4 md:px-6 md:py-3 cursor-pointer w-full md:w-auto">
                Contact Us
              </button>
            </li>
          </ul>
        </nav>

        {/* Left Content */}
        <div className="bg-[#212529] w-full md:w-1/2 h-full flex flex-col justify-between pt-8 md:px-16">
          <img src="/Logo.svg" alt="Logo" className="h-12 w-48" />
          <div className="text-white gap-6 flex flex-col pb-12">
            <h1 className="text-[40px] md:text-[64px] font-light leading-tight md:leading-[77px]">
              Redefining <br /> Energy
            </h1>
            <p className="text-base md:w-[530px] leading-[25px]">
              As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.
            </p>
            <Button />
          </div>
        </div>
        {/* Right Content */}
        <div className="w-full md:w-1/2 h-full bg-[url(/HomePageImage.svg)] bg-cover bg-center pt-28 md:pt-0"></div>
      </section>

      {/*Home Page Second Section */}
      <section>
      <HomePageSection/>
      <div className="flex justify-end w-full md:p-20 gap-6">
        <p className="text-[#212529] text-left font-400 w-[820px] text-[18px] leading-[25px] ">
          Leading the market for two decades, we have been experts in energy efficiency. With an unwavering commitment to innovation, we offer tailored solutions for projects of all sizes. From LED lighting to photovoltaic energy and electric mobility, our dedicated team works tirelessly to deliver cutting-edge results. We are committed to shaping a more sustainable and efficient energy future.
        </p>
      </div>
      </section>

      {/*HomePage 3rd Section*/}
      <section>
        <div className="flex flex-col lg:flex-row items-center bg-gray-200 p-6 sm:p-10 md:p-20 h-auto lg:h-[500px]">
        <img
          src="/DeepKnowledgeImage.svg"
          alt="Building"
          className=" position-absolute top-[-12px] h-[500px]"
        />
          <InfoSection />
        </div>
      </section>

      {/*HomePage 4th Section*/}
      <section className="px-6 py-12 sm:px-10 md:p-20 bg-gray-50">
        <InfoSection
          title="Get in touch with us"
          content="If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals."
          linkText="Contact Us"
          linkUrl="#"
        />
      </section>
      {/*Footer section*/}
      <section>
        <Footer/>

      </section>
      
    </>
  );
}

export default HomePage;
