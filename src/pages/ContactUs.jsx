function ContactUs() {
  return (
    <>
     {/*Top Section Of Contact US Page*/}
     <div className="flex flex-col justify-end items-start h-screen bg-[#F4F4F4]">
      
      <section className="flex flex-col items-start sm:px-10 px-4 md:px-16 ">
        <h1 className="text-[48px] sm:text-5xl text-[#212529] mb-12 font-400">
        Contact us
        </h1>
        <p className="text-[16px] sm:text-xl text-[#424649] text-left font-400 leading-[25px] max-w-[640px] pb-[100px] sm:pb-12">
        Our team is here to assist you on your journey towards a sustainable and efficient energy future.
        </p>
      </section>
    </div>
    {/*Top Section Of Contact US Page*/}
    <section>
    <div className="flex flex-col lg:flex-row justify-between items-start p-6 lg:p-16 text-white font-400">
      {/* Left Side: Location & Open Hours */}
      <div className=" lg:w-1/3 w-full mb-8 lg:mb-0">
        <h2 className="text-[#212529] text-[40px] mb-10 ">Location</h2>
        <p className="mt-2 text-[#424649] ">Avenida Marta Lopes, Nº2</p>
        <p className="text-[#424649] mb-20">8400-401 Vila Real, Portugal</p>
        
        <h2 className="text-[#212529] text-[40px] mt-6 mb-10 ">Open hours</h2>
        <p className="mt-2 text-[#424649]">Weekdays - 9:00am to 6:00pm</p>
        <p className="text-[#424649]">Weekends - Closed</p>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-2/3 w-full rounded-lg">
        <h2 className="text-[#212529] text-[40px] mb-6">Form</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Name" className="p-3  text-[#A6A6AB] border border-[#F4F4F4] rounded-lg w-full" />
        <input type="email" placeholder="Email" className="p-3  text-[#A6A6AB] border border-[#F4F4F4] rounded-lg w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Phone number" className="p-3  text-[#A6A6AB] border border-[#F4F4F4] rounded-lg w-full" />
        <input type="text" placeholder="Company (optional)" className="p-3  text-[#A6A6AB] border border-[#F4F4F4] rounded-lg w-full" />
          </div>
        <textarea placeholder="Message" className="p-3 text-[#A6A6AB] border border-[#F4F4F4] rounded-lg w-full h-32" />
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <label className="text-[#424649] font-400 text-[18px] lg:mt-0 sm:mt-0 mt-6 ">I consent to Oakland C.E. processing my data for contact purposes.</label>
          </div>
          <button type="submit" className="w-[120px] px-6 py-3 bg-[#212529] text-[#FFFFFF] rounded-full hover:bg-[#FFFFFF4D] hover:text-[#212529]">Send</button>
        </form>
      </div>
    </div>
    </section>
    {/*Map Section Contact US Page*/}
    <section>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-20 mb-20">
          {/* Left Side - Image of Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27212.77590857159!2d74.34700550000001!3d31.5077596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1738579099996!5m2!1sen!2s" width="1300" height="450" className='w-full h-[510px] rounded-md' allowfullscreen="" loading="lazy" ></iframe>
          
          {/* Right Side - Image */}
          <img
          src="/DeepKnowledgeImage.svg"
          alt="Building"
          className="max-w-full h-[510px] mt-4 md:mt-0"
          />
      </div>
    </section>

    </>
  )
}

export default ContactUs