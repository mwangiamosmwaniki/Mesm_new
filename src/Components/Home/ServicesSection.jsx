import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { Shield, Music, Palette, Building, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cyber Services",
      description:
        "Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity.",
      features: [
        "Network Security",
        "Data Protection",
        "Threat Assessment",
        "Security Consulting",
      ],
      link: createPageUrl("CyberServices"),
      color: "bg-blue-500",
    },
    {
      icon: Music,
      title: "Entertainment",
      description:
        "Creative entertainment solutions for events, media production, and digital content creation.",
      features: [
        "Event Planning",
        "Media Production",
        "Content Creation",
        "Live Streaming",
      ],
      link: createPageUrl("Entertainment"),
      color: "bg-purple-500",
    },
    {
      icon: Palette,
      title: "Graphics Design",
      description:
        "Professional visual design services that bring your brand to life with stunning graphics.",
      features: [
        "Brand Identity",
        "Web Design",
        "Print Media",
        "Digital Marketing",
      ],
      link: createPageUrl("GraphicsDesign"),
      color: "bg-pink-500",
    },
    {
      icon: Building,
      title: "Construction",
      description:
        "Quality construction services from planning to completion, building your vision into reality.",
      features: [
        "Residential",
        "Commercial",
        "Renovation",
        "Project Management",
      ],
      link: createPageUrl("Construction"),
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional results across multiple industries, combining
            expertise with innovation to meet your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-xl transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col h-full">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={service.link} className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-700 group-hover:text-white group-hover:shadow-md transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
