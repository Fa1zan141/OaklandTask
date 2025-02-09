function Text({ paragraph1, paragraph2, paragraph3, paragraph4 }) {
  return (
    <>
      {/* Paragraph Group 1 */}
      <div className="flex flex-col gap-4 py-10 sm:px-8 lg:px-0">
        <p className="text-[#212529] text-base sm:text-lg font-400 max-w-3xl mx-auto">
          {paragraph1}
        </p>
        <p className="text-[#212529] text-base sm:text-lg font-400 max-w-3xl mx-auto">
          {paragraph2}
        </p>
      </div>

      {/* Paragraph Group 2 */}
      <div className="flex flex-col gap-4 sm:px-8 lg:px-20 mt-6 ">
        <p className="text-[#212529] text-base sm:text-lg font-400 mx-auto max-w-[880px]">
          {paragraph3}
        </p>
        <p className="text-[#212529] text-base sm:text-lg font-400 mx-auto max-w-[880px]">
          {paragraph4}
        </p>
      </div>
    </>
  );
}

export default Text;
