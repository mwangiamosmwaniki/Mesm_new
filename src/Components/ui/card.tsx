import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }) {
  return (
    <h2 className={`text-xl font-semibold ${className}`}>
      {children}
    </h2>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`text-gray-700 ${className}`}>
      {children}
    </div>
  );
}
