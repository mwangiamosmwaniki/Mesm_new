import React from "react";
import { Card } from "../Components/ui/card";
import sam6 from "../assets/images/sam6.jpeg";
import sam1 from "../assets/images/sam1.jpeg";
import sam2 from "../assets/images/sam2.jpeg";
import sam3 from "../assets/images/sam3.jpeg";
import sam5 from "../assets/images/sam5.jpeg";
import Grahics from "../assets/images/day2.jpg";
import sam7 from "../assets/images/sam7.jpeg";
import Door from "../assets/images/gate3.jpeg";
import Gate from "../assets/images/gate.jpeg";

function Gallery() {
  const galleryItems = [
    {
      title: "Site inspection",
      description:
        "Taking some time to check a construction site before the initial development",
      image: sam6,
    },
    {
      title: "Metal Fabrication",
      description: "Custom metal fabrication for commercial use.",
      image: sam7,
    },
    {
      title: "Construction project",
      description: "Modern interior design execution.",
      image: sam3,
    },
    {
      title: "Construction Site",
      description: "Large-scale construction project.",
      image: sam2,
    },
    {
      title: "Custom Graphic Design",
      description: "A top quality design aimed at inviting more clients.",
      image: Grahics,
    },
    {
      title: "Custom Architectural Design",
      description: "Tailor-made design solutions for clients.",
      image: sam1,
    },
    {
      title: "Welding Project",
      description: "High-quality welding work for industrial structures.",
      image: sam5,
    },
    {
      title: "Welding Project",
      description: "Custom design high quality gate.",
      image: Gate,
    },
    {
      title: "Welding Project",
      description: "A modern design top quality gate.",
      image: Door,
    },
  ];

  return (
    <div className="bg-slate-100 py-10 px-4">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-10">
        Explore Some of Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <Card
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image Container with responsive aspect ratio */}
            <div className="w-full aspect-[4/3] relative">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              {item.description && (
                <p className="text-gray-600 text-sm line-clamp-3">
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
