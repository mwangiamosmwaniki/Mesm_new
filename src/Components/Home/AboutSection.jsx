import React from "react";
import { Card, CardContent } from "../../Components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About MESM Company Ltd
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We are committed to delivering high-quality services across multiple sectors, 
            providing professional, reliable, and innovative solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-6">Our Story</h3>
            <p className="text-[#FFCC00] mb-6">
              At MESM Company Ltd, we have built our reputation on delivering excellence across 
              diverse industries. Our multidisciplinary approach allows us to serve clients 
              with comprehensive solutions that address their unique challenges.
            </p>
            <p className="text-[#FFFF00]">
              From cybersecurity to construction, entertainment to graphics design, we bring 
              the same level of professionalism and innovation to every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900 mb-2">500+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-2xl text-gray-900 mb-2">1000+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-none">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To offer exceptional services with a focus on efficiency, creativity, and customer satisfaction. 
                We strive to integrate modern technology and industry expertise to ensure that our clients 
                receive the best possible experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border-none">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To be a leading provider of technology, creative, and construction services, 
                setting the standard for excellence and innovation in every industry we serve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}