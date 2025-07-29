import type { ReactNode, SelectHTMLAttributes, ButtonHTMLAttributes } from "react";

type SelectProps = {
  children: ReactNode;
  className?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ children, className = "", ...props }: SelectProps) {
  return (
    <select className={`border rounded px-3 py-2 ${className}`} {...props}>
      {children}
    </select>
  );
}

type SelectItemProps = {
  value: string;
  children: ReactNode;
};

export function SelectItem({ value, children }: SelectItemProps) {
  return <option value={value}>{children}</option>;
}

type SelectTriggerProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function SelectTrigger({ children, ...props }: SelectTriggerProps) {
  return (
    <button {...props} className="border px-3 py-2 rounded w-full text-left">
      {children}
    </button>
  );
}

type SelectContentProps = {
  children: ReactNode;
};

export function SelectContent({ children }: SelectContentProps) {
  return (
    <div className="bg-white border rounded shadow-md mt-2 absolute z-50">
      {children}
    </div>
  );
}

type SelectValueProps = {
  children: ReactNode;
};

export function SelectValue({ children }: SelectValueProps) {
  return <span>{children}</span>;
}
