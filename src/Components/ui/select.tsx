import React, { ReactNode, useState } from "react";

/* ---------------- SELECT ---------------- */
type SelectProps = {
  children: ReactNode;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function Select({
  children,
  className = "",
  value,
  onValueChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState<string | undefined>(undefined);

  const toggle = () => setOpen((prev) => !prev);

  const selectValue = (val: string, lbl: string) => {
    onValueChange?.(val);
    setLabel(lbl);
    setOpen(false);
  };

  return (
    <div className={`relative inline-block w-full ${className}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, {
          open,
          value,
          label,
          toggle,
          selectValue,
        });
      })}
    </div>
  );
}

/* ---------------- TRIGGER ---------------- */
type SelectTriggerProps = {
  children?: ReactNode;
  open?: boolean;
  toggle?: () => void;
};

export function SelectTrigger({ children, open, toggle }: SelectTriggerProps) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-haspopup="listbox"
      aria-expanded={open}
      className="border px-3 py-2 rounded w-full text-left bg-white"
    >
      {children}
    </button>
  );
}

/* ---------------- CONTENT ---------------- */
type SelectContentProps = {
  children: ReactNode;
  open?: boolean;
};

export function SelectContent({ children, open }: SelectContentProps) {
  if (!open) return null;
  return (
    <div
      role="listbox"
      className="bg-white border rounded shadow-md mt-2 absolute w-full z-50"
    >
      {children}
    </div>
  );
}

/* ---------------- ITEM ---------------- */
type SelectItemProps = {
  value: string;
  children: ReactNode;
  selectValue?: (val: string, label: string) => void;
};

export function SelectItem({ value, children, selectValue }: SelectItemProps) {
  return (
    <div
      role="option"
      onClick={() => selectValue?.(value, String(children))}
      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
}

/* ---------------- VALUE ---------------- */
type SelectValueProps = {
  value?: string;
  label?: string;
  placeholder?: string;
};

export function SelectValue({ value, label, placeholder }: SelectValueProps) {
  return <span>{label || placeholder}</span>;
}
