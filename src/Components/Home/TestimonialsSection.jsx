import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../Components/ui/select";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "../../components/entities/Testimonial";


export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    service: "",
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const data = await Testimonial.list("-created_date", 6);
      setTestimonials(data);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Save to backend (optional)
    if (Testimonial.create) {
      await Testimonial.create(formData);
    }

    // Send email to yourself
    await SendEmail({
      to: "mwangiamos703@gmail.com",
      subject: `New Testimonial from ${formData.name}`,
      body: `
        Name: ${formData.name}
        Service: ${formData.service || 'Not specified'}
        Rating: ${formData.rating} stars
        Comment: ${formData.comment}
      `,
    });

    // Reset form & reload testimonials
    setFormData({ name: "", comment: "", service: "", rating: 5 });
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    loadTestimonials();
  } catch (error) {
    console.error("Error submitting testimonial:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experience with MESM Company Ltd.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))
          ) : testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-blue-500 mr-2" />
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-gray-900">- {testimonial.name}</p>
                    {testimonial.service && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {testimonial.service.replace('_', ' ')}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No reviews yet. Be the first to share your experience!</p>
            </div>
          )}
        </div>
        
        {/* Review Form */}
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Share Your Experience
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
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
                    Service Used
                  </label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({...formData, service: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cyber_services">Cyber Services</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="graphics_design">Graphics Design</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({...formData, rating: star})}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <Textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  rows={4}
                  required
                  className="w-full"
                  placeholder="Tell us about your experience with our services..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}