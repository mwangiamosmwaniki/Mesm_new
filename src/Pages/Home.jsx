import HeroSection from "../Components/Home/HeroSection";
import ServicesSection from "../Components/home/ServicesSection";
import AboutSection from "../Components/home/AboutSection";
import TestimonialsSection from "../Components/home/TestimonialsSection";
import ContactSection from "../Components/home/ContactSection";

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