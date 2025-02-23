import {useState} from 'react';
import InfoSection from '../components/InfoSection';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
     const navigate = useNavigate();
      function PortfolioArticlenavigate(){
        navigate('/portfolio-article')
      }
      
      const items = [
        {
          title: "Deloitte Building, London",
          category: ["Energy Efficiency", "LED Lighting"],
          image: "/Image1.svg",
        },
        {
          title: "Car Chargers, Oakland",
          category: ["Electric Mobility"],
          image: "/Image2.svg",
        },
        {
          title: "Amazon Headquarters, UK",
          category: ["LED Lighting"],
          image: "/Image3.svg",
        },
        {
          title: "Astrazeneca Lab Facilities, Nevada",
          category: ["LED Lighting"],
          image: "/Image4.svg",
        },
        {
          title: "Gordon’s BBQ, Las Vegas",
          category: ["Energy Efficiency", "LED Lighting"],
          image: "/Image5.svg",
        },
        {
          title: "Car Chargers, Portugal",
          category: ["Electric Mobility"],
          image: "/Image6.svg",
        },
        {
          title: "Deloitte Building, London",
          category: ["Energy Efficiency", "LED Lighting"],
          image: "/Image1.svg",
        },
        {
          title: "Car Chargers, Oakland",
          category: ["Electric Mobility"],
          image: "/Image2.svg",
        },
        {
          title: "Amazon Headquarters, UK",
          category: ["LED Lighting"],
          image: "/Image3.svg",
        },
        {
          title: "Astrazeneca Lab Facilities, Nevada",
          category: ["LED Lighting"],
          image: "/Image4.svg",
        },
        {
          title: "Gordon’s BBQ, Las Vegas",
          category: ["Energy Efficiency", "LED Lighting"],
          image: "/Image5.svg",
        },
        {
          title: "Car Chargers, Portugal",
          category: ["Electric Mobility"],
          image: "/Image6.svg",
        },
      ...Array.from({ length: 88 }, (_, i) => ({
        title:  i % 3 === 0 ? ["Car Chargers, Portugal"] : ["Gordon’s BBQ, Las Vegas"],
        category:  i % 3 === 0 ? ["Electric Mobility"] : ["LED Lighting"],
        image: i % 3 === 0 ? `Image6.svg` : `Image5.svg`,
      }))
      ];
      const [selectedCategory, setSelectedCategory] = useState("All");

      const filteredItems =
        selectedCategory === "All"
          ? items
          : items.filter((item) => item.category.includes(selectedCategory));
    
      const categories = [
          "All",
          "LED Lighting",
          "Energy Efficiency",
          "Electric Mobility",
        ];

      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage=6;

      // Handler for the "Próximo" button
      const handleNext = () => {
        if (currentPage < 17) {
          setCurrentPage((prev) => prev + 1);
        }
      };

      const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
      const displayedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  return (
    <>
    {/* Top Section Of Portfolio Page */}
      <div className="flex flex-col justify-end items-start h-screen bg-[url(/PortfolioBg.svg)] bg-cover bg-center">
        <section className="flex flex-col items-start px-4 sm:px-10 md:px-16">
          <h1 className="text-[48px] sm:text-5xl text-[#ffffff] mb-12 font-400">
            Portfolio
          </h1>
          <p className="text-[16px] sm:text-xl text-[#ffffff] text-left font-400 leading-[25px] max-w-[540px] pb-[100px] sm:pb-12">
            Explore our portfolio of remarkable projects where innovation and sustainability converge.
          </p>
        </section>
      </div>

    {/* 2nd Section Of Portfolio Page */}
    <section className="bg-white py-16 md:px-10 lg:px-20">
    <div className="px-6 lg:px-0 max-w-4xl mt-12">
        <h2 className="text-[40px] sm:text-4xl font-400 text-[#212529]">
        The distinction that sets us Apart in the industry
        </h2>
        <p className="mt-6 lg:mt-16 text-[18px] sm:text-lg md:text-xl text-[#424649] max-w-[820px]">
        In a highly competitive industry, what distinguishes a company is not just its offerings but its unwavering commitment to excellence and innovation. At Oakland C.E., we understand that to rise above the competition, we must constantly strive for distinction in every aspect of our business. Our journey in the energy sector has been defined by innovation and expertise.
        </p>
    </div>

    <div className=" px-6 lg:px-0 mt-10 mb-10 flex flex-col sm:flex-row items-start gap-10 lg:gap-64">
        {/* Innovation */}
        <div className="flex items-center gap-4">
        <div className="p-0 rounded-lg">
            <img src="Graph.svg" alt="Innovation" className="w-12 h-12" />
        </div>
        <p className="text-[32px] md:text-2xl text-[#212529]">Innovation</p>
        </div>

        {/* Expertise */}
        <div className="flex items-center gap-4">
        <div className="p-0 rounded-lg">
            <img src="Profiles.svg" alt="Expertise" className="w-12 h-12" />
        </div>
        <p className="text-[32px] md:text-2xl text-[#212529]">Expertise</p>
        </div>

        {/* Quality */}
        <div className="flex items-center gap-4">
        <div className="p-0 rounded-lg">
            <img src="Star.svg" alt="Quality" className="w-12 h-12" />
        </div>
        <p className="text-[32px] md:text-2xl text-[#212529]">Quality</p>
        </div>
    </div>
    </section>

    <section>
      <div className="w-full p-6 lg:p-10 lg:px-20 bg-[#F4F4F4]">
        {/* Filter Buttons */}
        <div className="w-full flex flex-wrap gap-3 mb-14 justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-[16px] sm:text-[18px] font-400 transition ${
                selectedCategory === category
                  ? "bg-[#A6A6AB] text-white"
                  : "bg-[#FFFFFF] text-[#212529] hover:bg-[#A6A6AB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div key={index} className="overflow-hidden">
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-xl object-cover cursor-pointer"
                onClick={PortfolioArticlenavigate}
              />
              {/* Text Content */}
              <div className="pt-6">
                <h3 className="text-[16px] sm:text-[18px] font-400 text-[#212529]">{item.title}</h3>
                <p className="text-[14px] text-[#424649] mt-2">{item.category.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex overflow-x-auto mt-6 justify-center lg:justify-end space-x-2">
          {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-full text-[14px] sm:text-[16px] font-400 transition ${
                currentPage === page
                  ? "bg-[#A6A6AB] text-white"
                  : "text-[#212529] hover:bg-[#A6A6AB]"
              }`}
            >
              {page}
            </button>
          ))}
          
          {totalPages > 3 && currentPage < 17 && (
            <button
              onClick={handleNext}
              className="px-3 py-1 rounded-full text-[14px] sm:text-[16px] font-400 text-[#212529] hover:bg-[#A6A6AB]"
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </section>

    <section className='px-0 lg:p-10 mb-20'>
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

export default Portfolio;
