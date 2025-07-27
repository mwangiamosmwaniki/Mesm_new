import React from "react";

export function Testimonial({ name, role, message }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-700 italic mb-4">"{message}"</p>
      <div className="text-sm text-gray-500">
        — {name}, {role}
      </div>
    </div>
  );
}
