const Footer = () => {
    return (
      <footer className=" bg-[#212529] text-white py-8 px-6 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Pages Section */}
          <div>
            <h3 className="text-[21px] mb-4 font-400">Pages</h3>
            <ul className="space-y-2 font-400 text-[18px]">
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/about-us" className="hover:underline">About us</a></li>
              <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="/contact-us" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
  
          {/* Social Media Section */}
          <div>
            <h3 className="text-[21px] mb-4 font-400">Social Media</h3>
            <ul className="space-y-2 font-400 text-[18px]">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="text-[21px] mb-4 font-400">Legal</h3>
            <ul className="space-y-2 font-400 text-[18px]">
              <li><a href="/privacy-policy" className="hover:underline">Privacy and Cookies Policy</a></li>
              <li><a href="#" className="hover:underline">Termos e Condições</a></li>
            </ul>
          </div>
  
          {/* Certifications Section */}
          <div className="flex flex-col justify-between md:items-end">
            <div className="mt-8">
              <img src="/FooterImage.svg" alt="ISO Certification" className="h-10 w-auto" />
            </div>
          </div>
        </div>
  
        {/* Footer Credits */}
        <div className="flex flex-wrap justify-center items-center gap-[990px] text-[14px] font-400 mt-8 text-[#FFFFFF] space-y-2 md:space-y-0">
          <p>Oakland - Energy Consulting ©</p>
          <p className="text-[gray]">Design by Ferrêh</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  