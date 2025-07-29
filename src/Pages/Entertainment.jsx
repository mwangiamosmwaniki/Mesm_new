import { Card, CardContent, CardHeader, CardTitle } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { Music, Camera, Mic, Video, Calendar, Users } from "lucide-react";

export default function Entertainment() {
  const services = [
    {
      icon: Calendar,
      title: "Event Planning",
      description: "Complete event management from concept to execution for memorable experiences.",
      features: ["Wedding Planning", "Corporate Events", "Birthday Parties", "Cultural Events"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Professional photography and videography services for all your special moments.",
      features: ["Wedding Photography", "Corporate Videos", "Product Photography", "Event Coverage"]
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Professional music production, mixing, and mastering services.",
      features: ["Audio Recording", "Music Mixing", "Mastering", "Jingle Production"]
    },
    {
      icon: Video,
      title: "Video Production",
      description: "High-quality video production for commercials, documentaries, and promotional content.",
      features: ["Commercial Videos", "Documentaries", "Music Videos", "Social Media Content"]
    },
    {
      icon: Mic,
      title: "Live Entertainment",
      description: "Live entertainment services including DJs, bands, and performance management.",
      features: ["DJ Services", "Live Bands", "MC Services", "Sound System Rental"]
    },
    {
      icon: Users,
      title: "Talent Management",
      description: "Professional talent management and booking services for artists and performers.",
      features: ["Artist Booking", "Talent Scouting", "Performance Coaching", "Career Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Music className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entertainment Services
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              From event planning to music production, we create unforgettable experiences 
              that bring your vision to life with creativity and professionalism.
            </p>
            <a href="https://wa.me/254715825808" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Plan Your Event
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
              Our Entertainment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive entertainment solutions to make your events 
              and projects truly spectacular.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-shadow group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Services Include:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Entertainment Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working on diverse entertainment projects, 
              creating memorable experiences for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Events</h3>
              <p className="text-gray-600">
                Successfully planned and executed over 200 events ranging from 
                intimate gatherings to large-scale celebrations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">500+ Productions</h3>
              <p className="text-gray-600">
                Created over 500 high-quality video and audio productions for 
                various clients across different industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100+ Artists</h3>
              <p className="text-gray-600">
                Managed and developed over 100 talented artists, helping them 
                build successful careers in entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's bring your entertainment vision to life. Contact us today to discuss 
            your project and see how we can make it extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/254715825808" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Start Your Project
              </Button>
            </a>
            <a href="mailto:info@mesmcompany.com">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                Get Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}