const defaultInfo = {
  title: "Deep knowledge in the field",
  content:
    "Our extensive experience and deep expertise in the energy sector have positioned us as leaders in the industry. With two decades of market leadership, we have honed our knowledge in energy efficiency, LED lighting, photovoltaic energy, and electric mobility to a level that sets us apart. Our team's profound understanding of these domains enables us to provide innovative, tailored solutions that not only meet but exceed the expectations of our clients.",
  linkText: "Learn more",
  linkUrl: "#",
};

const InfoSection = ({ title, content, linkText, linkUrl }) => {
  return (
    <div className="p-6 sm:p-8 md:p-10 lg:w-1/2 w-full">
      <h2 className="text-[#212529] text-[40px] sm:text-4xl font-400">
        {title}
      </h2>
      <p className="w-full text-[#424649] sm:w-[790px] mt-6 text-base text-[18px] leading-[25px] sm:text-lg md:text-xl font-400">
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
