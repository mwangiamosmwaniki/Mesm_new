import React from "react";

export function Select({ children, className = "", ...props }) {
  return (
    <select className={`border rounded px-3 py-2 ${className}`} {...props}>
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}

export function SelectTrigger({ children, ...props }) {
  return (
    <button {...props} className="border px-3 py-2 rounded w-full text-left">
      {children}
    </button>
  );
}

export function SelectContent({ children }) {
  return (
    <div className="bg-white border rounded shadow-md mt-2 absolute z-50">
      {children}
    </div>
  );
}

export function SelectValue({ children }) {
  return <span>{children}</span>;
}
