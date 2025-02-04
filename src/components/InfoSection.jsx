const defaultInfo = {
  title: "Deep knowledge in the field",
  content:
    "Our extensive experience and deep expertise in the energy sector have positioned us as leaders in the industry. With two decades of market leadership, we have honed our knowledge in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to a level that sets us apart. Our team's profound understanding of these domains enables us to provide innovative, tailored solutions that not only meet but exceed the expectations of our clients.",
  linkText: "Learn more",
  linkUrl: "#",
};

const InfoSection = ({ title, content, linkText, linkUrl }) => {
  return (
    <div className="p-6 sm:p-0 md:p-10 ">
      <h2 className="text-[#212529] text-[40px] sm:text-4xl md:text-5xl font-400">
        {title}
      </h2>
      <p className="w-full text-[#424649] text-[18px] mt-6 text-base sm:text-lg md:text-[18px] lg:w-[790px] leading-6 sm:leading-7 md:leading-8 font-400">
        {content}
      </p>
      <a
        href={linkUrl}
        className="mt-4 inline-block text-[#212529] font-medium hover:underline"
      >
        {linkText} →
      </a>
    </div>
  );
};

InfoSection.defaultProps = defaultInfo;
export default InfoSection;
