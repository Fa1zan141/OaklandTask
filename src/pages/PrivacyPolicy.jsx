import React from 'react'
import DarkNavBar from '../components/DarkNavBar'
import Footer from '../components/Footer'
function PrivacyPolicy() {
  return (
    <>
    {/*Top Section Of  Privacy-Poilcy Page*/}
    <div className="flex flex-col justify-end items-start min-h-[640px] bg-[#F4F4F4]">
    <DarkNavBar />
    <section className="flex flex-col items-start sm:px-10 px-4 md:px-16 ">
      <h1 className="text-[48px] sm:text-5xl text-[#212529] mb-12 font-400">
      Privacy and Cookies Policy
      </h1>
      <p className="text-[16px] sm:text-xl text-[#424649] text-left font-400 leading-[25px] max-w-[640px] pb-[100px] sm:pb-20">
      This privacy is designed to inform you about how we collect, use, and protect your personal information when you interact with our website.
      </p>
    </section>
    </div>
    {/*Questionare Section Of Privacy-Poilcy Page*/}
    <section>
    <div className="max-w-4xl p-6 sm:p-8 lg:p-20 text-[#424649] bg-white">
    <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-400 mb-4 text-[#212529]">1. Information we collect</h2>
    <p className="mb-6 w-full sm:w-[950px] font-400 text-[14px] sm:text-[16px] md:text-xl">
        We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address, browser type, device information, pages visited, and actions taken.
    </p>
    
    <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-400 mb-4 text-[#212529]">2. How we use your information</h2>
    <p className="mb-6 w-full sm:w-[950px] font-400 text-[14px] sm:text-[16px] md:text-xl">
        Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.
    </p>
    
    <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-400 mb-4 text-[#212529]">3. Communication</h2>
    <p className="mb-6 w-full sm:w-[950px] font-400 text-[14px] sm:text-[16px] md:text-xl">
        We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.
    </p>
    
    <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-400 mb-4 text-[#212529]">4. Cookies and Tracking Technologies</h2>
    <p className="mb-6 w-full sm:w-[950px] font-400 text-[14px] sm:text-[16px] md:text-xl">
        To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your browser settings.
    </p>
    
    <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-400 mb-4 text-[#212529]">5. Security</h2>
    <p className="w-full sm:w-[950px] font-400 text-[14px] sm:text-[16px] md:text-xl">
        We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it's important to acknowledge that no method of transmission over the internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.
    </p>
    </div>

    </section>

    {/*Footer Section Of Privacy-Poilcy Page*/}
    </>
  
  )
}

export default PrivacyPolicy