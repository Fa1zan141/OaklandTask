import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PortfolioArticle from "./pages/PortfolioArticle";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  const location = useLocation();

    // Config for different pages
    const navConfig = {
      "/": { logo: "/Logo.svg", buttonBgColor: "#FFFFFF4D", textColor: "#ffffff", buttontext:'#ffffff' },
      "/services": { logo: "/Logo.svg", buttonBgColor: "#FFFFFF4D", textColor: "#ffffff", buttontext:'#ffffff' },
      "/portfolio": { logo: "/Logo.svg", buttonBgColor: "#FFFFFF4D", textColor: "#ffffff", buttontext:'#ffffff' },
      "/contact-us": { logo: "/DarkLogo.svg", buttonBgColor: "#212529", textColor: "#212529",buttontext:'#ffffff' },
      "/about-us": { logo: "/DarkLogo.svg", buttonBgColor: "#212529", textColor: "#212529",buttontext:'#ffffff' },
      "/portfolio-article": { logo: "/DarkLogo.svg", buttonBgColor: "#212529", textColor: "#212529",buttontext:'#ffffff' },
      "/privacy-policy": { logo: "/DarkLogo.svg", buttonBgColor: "#212529", textColor: "#212529",buttontext:'#ffffff' },
    };
  
    const { logo, buttonBgColor, textColor,buttontext } = navConfig[location.pathname] || navConfig["/"];

  return (
    <>
      <NavBar logo={logo} buttonBgColor={buttonBgColor} textColor={textColor} buttontext={buttontext} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/portfolio-article" element={<PortfolioArticle />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;