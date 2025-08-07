import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CyberServices from "./Pages/CyberServices";
import Entertainment from "./Pages/Entertainment";
import GraphicsDesign from "./Pages/GraphicsDesign";
import Construction from "./Pages/Construction";
import Gallery from "./Pages/Gallery";
import AboutSection from "./Components/Home/AboutSection";
import FAQs from "./Components/Home/FAQs";
import ContactSection from "./Components/Home/ContactSection";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <Router>
    <ScrollToTop />
      <Layout currentPageName="Home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cyberservices" element={<CyberServices />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/graphicsdesign" element={<GraphicsDesign />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </Layout>
    </Router>
  );
}
