import { useState } from "react";
import {ArrowDown} from 'lucide-react'
import { motion } from "framer-motion";
import ImageText from '../components/ImageText';
import InfoSection from '../components/InfoSection';


function Services() {
    const sections = [
        "Illumination",
        "Sustainable Energy",
        "Electric Mobility",
        "Consulting",
      ];

      const [openSection, setOpenSection] = useState(null);
      const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
      };

  return (
    <>
     {/*Top Section Of Services Page*/}
     <div className="flex flex-col justify-end items-start h-screen bg-[#212529]">
      <section className="flex flex-col items-start sm:px-10 px-4 md:px-16 ">
        <h1 className="text-[64px] sm:text-5xl text-[#FFFFFF] mb-12 font-400">
        Services
        </h1>
        <p className="text-[18px] sm:text-xl text-[#FFFFFF] text-left font-400 leading-[25px] max-w-[640px] pb-[100px] sm:pb-20">
        Discover our comprehensive range of services tailored to meet your energy efficiency, LED lighting, photovoltaic energy, and much more.
        </p>
      </section>

    </div>
   {/* Second Section Of Services Page */}
<section>
  <div className="p-4 sm:p-8 lg:p-20 w-full">
    {sections.map((section, index) => (
      <div key={index} className="border-t border-gray-400">
        <button
          className="w-full flex justify-between items-center py-4 px-2 text-[24px] sm:text-[36px] lg:text-[48px] font-400 text-[#212529] transition-all"
          onClick={() => toggleSection(index)}
        >
          <span className="truncate">{section}</span>
          <ArrowDown
            className={`transition-transform text-[#A6A6AB] ${openSection === index ? "rotate-180" : ""}`}
          />
        </button>
        {openSection === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto"  }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 text-[#212529] text-[14px] sm:text-[16px] lg:text-[18px]"
          >
            This Is My Data For {section} here.
          </motion.div>
        )}
      </div>
    ))}
  </div>
</section>
    {/*Image Section Of Services Page*/}
    <section className="px-6 lg:p-20 max-w-full gap-8 items-center ">
      <ImageText
      text="Sustainable energy consulting" 
      span= "Portugal. 2023"
      imageSrc="/ServicesImage.svg"
      imageAlt="Sustainable energy consulting"
      />
    </section>
    {/*Second Last Section Of Services Page*/}
    <section className="lg:pl-10 pl-0 mb-20">
        <InfoSection
        title="Proudly helping businesses"
        content="Explore our portfolio of remarkable projects where innovation and sustainability converge. Discover how we've transformed energy landscapes and elevated standards in the industry."
        linkText="View our Portfolio"
        linkUrl="/portfolio"
        />
    </section>
    {/*Footer Section Of Services Page*/}

    </>
  )
}

export default Services