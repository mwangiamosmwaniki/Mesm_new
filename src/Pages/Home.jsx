import HeroSection from "../Components/Home/HeroSection";
import ServicesSection from "../Components/Home/ServicesSection";
import AboutSection from "../Components/Home/AboutSection";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import ContactSection from "../Components/Home/ContactSection";
import FAQs from "../Components/Home/FAQs";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FAQs />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}