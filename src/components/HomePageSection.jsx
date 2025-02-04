import React from "react";

const HomePageSections = [
  {
    title: "Energy Efficiency",
    image: "/Windmill.svg",
  },
  {
    title: "LED Lighting",
    image: "/Led.svg",
  },
  {
    title: "Photovoltaic Energy",
    image: "/Energy.svg",
  },
  {
    title: "Electric Mobility",
    image: "/Electric.svg",
  },
];

const HomePageSection = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 p-8 sm:p-12 md:p-20">
        <h2 className="text-[#212529] text-[40px] md:text-[40px] font-medium font-Inter">Areas of Expertise</h2>
        <p className="text-[#424649] max-w-full text-[18px] sm:max-w-xl">
          Whether for small or large-scale projects, we are committed to delivering cutting-edge results, contributing to a more sustainable and innovative energy future.
        </p>
      </div>
      <div className="sm:px-8 md:px-20 lg:px-20">
      <div className="sm:px-8 md:px-20 lg:px-0 overflow-x-auto">
      <div className="flex flex-row gap-6  ">
        {HomePageSections.map((area, index) => (
          <div
            key={index}
            className="relative shrink-0 lg:flex-1 group overflow-hidden rounded-2xl shadow-lg w-full  sm:w-[500px]"
          >
            <img
              src={area.image}
              alt={area.title}
              className="w-full h-48 md:h-64 object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full text-white p-4 text-[18px] font-400 font-Inter">
              {area.title}
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    </section>
  );
};

export default HomePageSection;