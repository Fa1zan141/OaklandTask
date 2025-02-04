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
  const routeProps = {
    "/": { logoSrc: "/Logo.svg", buttonColor: "#FFFFFF4D" },
    "/services": { logoSrc: "/Logo.svg", buttonColor: "#FFFFFF4D" },
    "/portfolio": { logoSrc: "/Logo.svg", buttonColor: "#FFFFFF4D" },
    "/contact-us": { logoSrc: "/DarkLogo.svg", buttonColor: "#F4F4F4" },
    "/about-us": { logoSrc: "/DarkLogo.svg", buttonColor: "#FFFFFF4D" },
    "/privacy-policy": { logoSrc: "/DarkLogo.svg", buttonColor: "#F4F4F4" },
  };

  const location = useLocation();

  return (
    <>
      <NavBar {...routeProps[location.pathname]} />
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