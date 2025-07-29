import HeroSection from "../Components/Home/HeroSection";
import ServicesSection from "../Components/Home/ServicesSection";
import AboutSection from "../Components/Home/AboutSection";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import ContactSection from "../Components/Home/ContactSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}