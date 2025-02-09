import { ArrowLeft, ArrowRight } from 'lucide-react';
import InfoSection from '../components/InfoSection';
function PortfolioArticle() {
  return (
    <>
      {/* Top Section of Portfolio Article Page */}
<div className="flex flex-col justify-end items-start pb-16 px-10 lg:px-10 min-h-screen bg-[#F4F4F4]">
  
  {/* Portfolio Tagline */}
  <div className="text-[#A6A6AB] uppercase tracking-widest text-[14px] sm:text-[16px] md:text-[18px]">
    Portfolio
  </div>
  
  {/* Article Title */}
  <h1 className="text-[24px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-400 text-[#212529] mt-2">
    Deloitte Building, London
  </h1>
  
  {/* Navigation Buttons */}
  <div className="flex items-center justify-between w-full mt-4">
    <button className="text-gray-400 hover:text-gray-700">
      <ArrowLeft size={24} />
    </button>
    <button className="text-gray-400 hover:text-gray-700">
      <ArrowRight size={24} />
    </button>
  </div>
</div>

      {/*2nd Section Of Portfolio Article Page */}
      <section className="flex justify-end px-4 md:px-10 py-20">
        <div className="flex flex-col p-4 bg-white">
        <p className='text-[18px] text-[#424649] max-w-[1100px] '>
        Oakland C.E. has been at the forefront of energy transformation and sustainability for over two decades. Our commitment to innovation and expertise in energy efficiency has allowed us to undertake remarkable projects across the globe. One such endeavor that stands as a testament to our dedication to sustainable energy solutions is the Deloitte Building in the heart of London.
        </p>
        <br />
        <p className='text-[18px] text-[#424649] max-w-[1100px] '>
        The Deloitte Building, an iconic structure in the bustling financial district of London, sought to reduce its carbon footprint and enhance its operational efficiency. Deloitte, a global leader in professional services, recognized the importance of adopting sustainable practices not only as a corporate responsibility but also as a strategic advantage. Oakland C.E. was entrusted with the mission to revolutionize the building's energy consumption patterns and lighting systems, aligning them with a greener and more sustainable future.
        </p>
        <br />
        <p className='text-[18px] text-[#424649] max-w-[1080px] '>
        Our team of experts meticulously conducted an energy audit, scrutinizing every aspect of the Deloitte Building's energy consumption. This thorough analysis allowed us to identify areas where energy wastage was occurring and formulate a comprehensive energy efficiency strategy. Our recommendations ranged from optimizing HVAC systems to implementing advanced building management systems that dynamically adjusted lighting, temperature, and power usage based on occupancy and natural lighting conditions.
        </p>
    </div>
    </section>
   {/* 3rd Section of Portfolio Article Page */}
    <section className='flex flex-col gap-10 p-10'>
    {/* Left Image - Larger */}
    <div className="flex">
        <img
        className="w-full max-w-[1050px] h-auto md:h-[600px] object-cover shadow-lg"
        src="/PortfolioArticleImage.svg"
        alt="Portfolio Image"
        />
    </div>

    {/* Right Image - Smaller */}
    <div className="flex justify-around">
        <img
        className="w-full max-w-[780px] h-auto md:h-[450px] object-cover shadow-lg"
        src="/ArticleImage.svg"
        alt="Article Image"
        />
    </div>
    </section>

    {/* 4th Section of Portfolio Article Page */}
    <section className='p-2 lg:p-0 mb-20'>
    <InfoSection
            title="Get in touch with us"
            content="If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals."
            linkText="Contact Us"
            linkUrl="/contact-us"
            />
    </section>

    {/*Footer Section Of Portfolio Article Page */}
    </>
  );
}

export default PortfolioArticle;
