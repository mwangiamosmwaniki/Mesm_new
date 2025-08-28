import React from "react";
import { Card } from "../Components/ui/card";

function Gallery() {
  const galleryItems = [
    {
      title: "Welding Project",
      description: "High-quality welding work for industrial structures.",
      image:
        "https://images.unsplash.com/photo-1618832515494-65dbd65c2b71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Metal Fabrication",
      description: "Custom metal fabrication for commercial use.",
      image:
        "https://images.unsplash.com/photo-1600304621496-d3e9c0beea1a?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interior Renovation",
      description: "Modern interior design and execution.",
      image:
        "https://images.unsplash.com/photo-1615874959474-d609969a00ce?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Construction Site",
      description: "Ongoing large-scale construction project.",
      image:
        "https://images.unsplash.com/photo-1581090700227-1e8e5f15f56c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Event Setup",
      description: "Stage and lighting setup for a corporate event.",
      image: "src/assets/images/2.jpg",
    },
    {
      title: "Custom Design",
      description: "Tailor-made design solutions for clients.",
      image:
        "src/assets/images/wsholp2.jpg",
    },
  ];

  return (
    <div className="bg-slate-100 py-10 px-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-10">
        Explore Some of Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <Card key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
