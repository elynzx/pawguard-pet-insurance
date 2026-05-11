import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormInput({ label, error, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-primary/80 font-semibold text-sm ml-1">
        {label}
      </span>
      <input
        {...props}
        className={`
          w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-100 
          text-primary placeholder:text-gray-300
          transition-all duration-300 outline-none
          focus:border-secondary/40 focus:ring-4 focus:ring-secondary/5
          hover:border-gray-200
          ${error ? "border-red-400 focus:border-red-400" : ""}
          ${className}
        `}
      />

      {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
    </div>
  );
}
