import { Button } from "../../Components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { ArrowRight, Shield, Palette, Building, Music } from "lucide-react";
import { FaBuildingShield } from "react-icons/fa6";
import designHeroBg from "../../assets/images/bg.png";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${designHeroBg})`,
          opacity: 0.8,
          zIndex: 0,
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence in Every
            <span className="block text-yellow-400">Service We Deliver</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            MESM provides reliable engineering, cybersecurity, and creative tech
            solutions — including software development, system maintenance, and
            digital entertainment — helping startups and enterprises succeed in
            the modern digital landscape.
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-4 mb-12">
            <Link to={createPageUrl("Gallery")} className="inline-block">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-2 text-lg flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            <a
              href="https://wa.me/254715825808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-2 text-lg"
              >
                Get In Touch
              </Button>
            </a>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Cyber Services</h3>
              <p className="text-blue-200 text-sm">
                Reliability & high performance
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <Music className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Entertainment</h3>
              <p className="text-blue-200 text-sm">Creative Solutions</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Graphics Design</h3>
              <p className="text-blue-200 text-sm">Visual Excellence</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mb-4">
                <FaBuildingShield className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Construction</h3>
              <p className="text-blue-200 text-sm">Building Dreams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
