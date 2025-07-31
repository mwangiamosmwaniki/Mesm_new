import React, { useState } from "react";
import { Card, CardContent } from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../Components/ui/select";
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { Contact } from "../entities/Contact";
import { SendEmail } from "../integrations/Core";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service_interest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {

    // Send email to BOTH company and you
    await Promise.all([
      SendEmail({
        to: "mwangiamos703@gmail.com",
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Service Interest: ${formData.service_interest || 'General'}
          Message: ${formData.message}
        `,
      }),
    ]);

    // Reset form and show success
    setFormData({ name: "", email: "", message: "", service_interest: "" });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  } catch (error) {
    console.error("Error submitting contact form:", error);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? We'd love to hear from you. Contact us today 
            to discuss how we can help bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">              
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:info@mesmcompany.com" className="text-green-600 hover:text-green-700">
                      info@mesmcompany.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+254715825808" className="text-purple-600 hover:text-purple-700">
                      +254 715 825 808
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 10:00 PM</p>
                    <p className="text-gray-600">Sunday: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9202488817878!2d36.91767914102169!3d-1.2156950956178725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fd80f8da691%3A0x1228d571c32cb5f1!2sACK%20St.%20Timothy%20Parish%20Githurai45!5e0!3m2!1sen!2ske!4v1740149253389!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-slate-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <Select
                    value={formData.service_interest}
                    onValueChange={(value) => setFormData({...formData, service_interest: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cyber_services">Cyber Services</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="graphics_design">Graphics Design</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                    className="w-full"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}