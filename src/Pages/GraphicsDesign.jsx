import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import {
  Palette,
  Image,
  Layout,
  Printer,
  Smartphone,
  Globe,
} from "lucide-react";
import designHeroBg from "../assets/images/Graphic-Designs.jpg";

export default function GraphicsDesign() {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description:
        "Create a strong visual identity that represents your brand's values and personality.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Color Schemes",
        "Typography Selection",
      ],
    },
    {
      icon: Globe,
      title: "Web Design",
      description:
        "Modern, responsive web designs that engage visitors and drive conversions.",
      features: [
        "Website Design",
        "UI/UX Design",
        "Landing Pages",
        "E-commerce Design",
      ],
    },
    {
      icon: Printer,
      title: "Print Design",
      description:
        "Professional print materials that make a lasting impression on your audience.",
      features: ["Business Cards", "Brochures", "Flyers", "Posters & Banners"],
    },
    {
      icon: Smartphone,
      title: "Digital Marketing Graphics",
      description:
        "Eye-catching graphics for your digital marketing campaigns and social media.",
      features: [
        "Social Media Graphics",
        "Ad Banners",
        "Email Templates",
        "Infographics",
      ],
    },
    {
      icon: Layout,
      title: "Publication Design",
      description:
        "Professional layouts for magazines, books, reports, and other publications.",
      features: [
        "Magazine Layout",
        "Book Design",
        "Annual Reports",
        "Catalogs",
      ],
    },
    {
      icon: Image,
      title: "Illustration & Graphics",
      description:
        "Custom illustrations and graphics that bring your ideas to visual life.",
      features: [
        "Custom Illustrations",
        "Icon Design",
        "Character Design",
        "Vector Graphics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${designHeroBg})`,
            zIndex: 0,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-pink-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Graphics Design Services
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Transform your ideas into stunning visual designs that capture
              attention, communicate effectively, and leave a lasting impact on
              your audience.
            </p>
            <a
              href="https://wa.me/254715825808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Start Your Design Project
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured design process to ensure every project
              meets your expectations and delivers exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Discovery
              </h3>
              <p className="text-gray-600">
                We start by understanding your brand, goals, and target audience
                to create designs that truly represent your vision.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Concept</h3>
              <p className="text-gray-600">
                We develop initial concepts and ideas, exploring different
                creative directions that align with your objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                We create detailed designs, refining every element to ensure
                visual excellence and brand consistency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery</h3>
              <p className="text-gray-600">
                We deliver final designs in all required formats, ready for
                implementation across your chosen platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                300+ Designs
              </h3>
              <p className="text-gray-600">
                Created over 300 unique designs across various industries and
                project types.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                150+ Brands
              </h3>
              <p className="text-gray-600">
                Helped over 150 brands establish their visual identity and
                strengthen their market presence.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layout className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                100% Satisfaction
              </h3>
              <p className="text-gray-600">
                Achieved 100% client satisfaction through our commitment to
                quality and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-900 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Let's create stunning designs that make your brand unforgettable.
            Contact us today to discuss your design needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254715825808"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Get Design Quote
              </Button>
            </a>
            <a href="mailto:info@mesmcompany.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-pink-900"
              >
                View Portfolio
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
