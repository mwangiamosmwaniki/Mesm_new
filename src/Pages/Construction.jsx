import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Building, Home, Wrench, Hammer, HardHat, Truck } from "lucide-react";
import buildinBg from "../assets/images/buildings.png";

export default function Construction() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description:
        "Build your dream home with our expert residential construction services.",
      features: [
        "Custom Homes",
        "Home Extensions",
        "Kitchen Remodeling",
        "Bathroom Renovation",
      ],
    },
    {
      icon: Building,
      title: "Commercial Construction",
      description:
        "Professional commercial construction for offices, retail spaces, and more.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Warehouses",
        "Industrial Facilities",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description:
        "Transform your existing space with our comprehensive renovation services.",
      features: [
        "Interior Renovation",
        "Exterior Upgrades",
        "Space Optimization",
        "Modernization",
      ],
    },
    {
      icon: Hammer,
      title: "Project Management",
      description:
        "End-to-end project management to ensure timely and budget-friendly completion.",
      features: [
        "Planning & Design",
        "Permit Management",
        "Quality Control",
        "Timeline Management",
      ],
    },
    {
      icon: HardHat,
      title: "Specialized Services",
      description:
        "Specialized construction services for unique and complex projects.",
      features: [
        "Structural Work",
        "Electrical Installation",
        "Plumbing Systems",
        "HVAC Installation",
      ],
    },
    {
      icon: Truck,
      title: "Architectural Design",
      description:
        "We create innovative and functional architectural designs tailored to your specific needs and vision.",
      features: [
        "3D Renderings & Visualization",
        "Blueprint Drafting",
        "Interior & Exterior Design",
        "Space Planning & Layout Optimization",
        "Sustainable & Eco-Friendly Design",
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
            backgroundImage: `url(${buildinBg})`,
            // opacity: 0.5,
            zIndex: 0,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construction Services
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Building your vision into reality with quality craftsmanship,
              professional management, and attention to detail in every project
              we undertake.
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
                Get Construction Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial buildings, we provide
              comprehensive construction solutions tailored to your specific
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-shadow group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Services Include:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Construction Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600">
                Our skilled professionals bring years of experience and
                expertise to every construction project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quality Materials
              </h3>
              <p className="text-gray-600">
                We use only the highest quality materials from trusted suppliers
                to ensure long-lasting results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-600">
                We pride ourselves on completing projects on schedule and within
                budget, without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've successfully completed numerous construction projects,
              building lasting relationships with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">75+</h3>
              <p className="text-gray-600">Happy Homeowners</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Renovation Projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HardHat className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-yellow-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Let's turn your construction vision into reality. Contact us today
            for a free consultation and detailed project quote.
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
                Get Free Quote
              </Button>
            </a>
            <a href="mailto:info@mesmcompany.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-900"
              >
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
