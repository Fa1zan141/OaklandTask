import Button from '../components/Button';
import HomePageSection from '../components/HomePageSection';
import InfoSection from '../components/InfoSection';


function HomePage() {

  return (
    <>
      {/* Home Page Section */}
       {/*Top Section Of About US Page*/}
     <div className="flex flex-col justify-end items-start h-screen bg-[url(/HomeBg.svg)] bg-cover bg-no-repeat">
      <section className="flex flex-col items-start sm:px-10 px-4 md:px-16 ">
      <div className="text-white gap-6 flex flex-col pb-12 px-4 md:px-0">
            <h1 className="text-[40px] md:text-[64px] font-light leading-tight md:leading-[77px]">
              Redefining <br /> Energy
            </h1>
            <p className="text-base md:w-[530px] leading-[25px]">
              As market leaders for 20 years, we are experts in energy efficiency, providing tailored, concrete solutions to meet your needs.
            </p>
            <Button />
          </div>
      </section>

    </div>

      {/* Home Page Second Section */}
      <section>
        <HomePageSection />
        <div className="flex justify-end w-full p-6 md:p-20 gap-6 ">
          <p className="text-[#212529] text-left py-10 font-400 w-full md:w-[820px] text-[18px] leading-[25px]">
            Leading the market for two decades, we have been experts in energy efficiency. With an unwavering commitment to innovation, we offer tailored solutions for projects of all sizes. From LED lighting to photovoltaic energy and electric mobility, our dedicated team works tirelessly to deliver cutting-edge results. We are committed to shaping a more sustainable and efficient energy future.
          </p>
        </div>
      </section>

       {/*HomePage 3rd Section*/}
       <section>
        <div className="flex flex-col lg:flex-row items-center bg-gray-200 p-0 sm:p-10 md:p-20 h-auto lg:h-[500px]">
        <img
          src="/DeepKnowledgeImage.svg"
          alt="Building"
          className=" h-[500px] relative top-[-50px] "
        />
        <div className='overflow-hidden'>
        <InfoSection />
        </div>
          
        </div>
      </section>

      {/* HomePage 4th Section */}
      <section className="p-0 py-12 sm:px-10 bg-gray-50">
        <InfoSection
          title="Get in touch with us"
          content="If you're ready to explore how our expertise in energy efficiency, LED lighting, photovoltaic energy, and electric mobility can benefit your projects, don't hesitate to reach out. We're here to listen, collaborate, and provide you with tailored solutions that align with your specific needs and goals."
          linkText="Contact Us"
          linkUrl="/contact-us"
        />
      </section>
    </>
  );
}

export default HomePage;
