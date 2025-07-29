import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Server,
  Wifi,
  Laptop,
  Printer,
  Layers,
  FileText,
  Copy,
  ScanLine,
  Globe,
} from "lucide-react";

export default function CyberServices() {
  const services = [
    {
      icon: Printer, // You may replace this with a relevant Lucide icon
      title: "Photocopy",
      description:
        "Fast and reliable photocopying services for documents of all sizes.",
      features: [
        "Black & White Copying",
        "Color Copying",
        "Bulk Copying",
        "High-Speed Machines",
      ],
    },
    {
      icon: Layers, // Lucide icon suggestion for lamination
      title: "Lamination",
      description:
        "Protect your important documents with various lamination options.",
      features: [
        "ID Lamination",
        "A4/A3 Lamination",
        "Matte & Gloss Finishes",
        "Long-term Document Preservation",
      ],
    },
    {
      icon: FileText, // Lucide icon suggestion for typesetting
      title: "Type Setting",
      description:
        "Professional typesetting services for clear and visually appealing documents.",
      features: [
        "Reports & Proposals",
        "Resume Formatting",
        "Presentations",
        "Design Layout",
      ],
    },
    {
      icon: Copy, // Lucide icon suggestion for printing
      title: "Printing",
      description:
        "High-quality printing services for documents and marketing materials.",
      features: [
        "Black & White Printing",
        "Color Printing",
        "Various Paper Sizes",
        "Glossy & Matte Finishes",
      ],
    },
    {
      icon: ScanLine, // Replace with a scanning icon or use a placeholder like 'Camera' if unavailable
      title: "Scanning",
      description:
        "Quick and efficient scanning services to digitize your documents.",
      features: [
        "PDF & Image Scans",
        "High Resolution",
        "Email Delivery",
        "Flash Drive Support",
      ],
    },
    {
      icon: Globe, // For online services like HELB/E-Citizen
      title: "Online Services Assistance",
      description:
        "We assist with HELB, e-Citizen, and other online applications.",
      features: [
        "HELB Application",
        "e-Citizen Services",
        "NTSA Portal Support",
        "KRA PIN Registration",
      ],
    },
    {
      icon: Wifi,
      title: "WiFi Services",
      description:
        "Reliable and fast internet connectivity for browsing, research, and online services within our cyber café.",
      features: [
        "High-Speed Internet Access",
        "Affordable WiFi Packages",
        "Secure Network Environment",
        "Browsing Assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Laptop className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cyber & Office Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get all your printing, photocopying, lamination, and online
              service needs handled quickly and professionally. We make your
              everyday tasks easier and faster.
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
                Request a service
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
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end cybersecurity solutions to protect your
              business from evolving digital threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-xl transition-shadow group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cyber Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Expertise
              </h3>
              <p className="text-gray-600">
                Years of experience in cyber services with certified
                professionals who understand user requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600">
                Round-the-clock monitoring and support to ensure your systems
                are always protected against emerging threats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                Tailored security solutions that fit your specific business
                needs and industry requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait until it's too late. Contact us today for a comprehensive
            security assessment and protect your digital assets.
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
                Get Free Consultation
              </Button>
            </a>
            <a href="mwangiamos703@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
