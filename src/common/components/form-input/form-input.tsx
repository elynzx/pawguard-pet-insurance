import type { InputHTMLAttributes, ReactNode } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: ReactNode;
}

export function FormInput({ label, error, icon, ...props }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="text-primary/80 font-semibold text-sm ml-1">
        {label}
      </span>

      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40">
            {icon}
          </div>
        )}

        <input
          {...props}
          className={`
            w-full py-3 rounded-xl border-2 border-gray-100 
            text-primary placeholder:text-primary/50
            transition-all duration-300 outline-none
            focus:border-secondary focus:ring-4 focus:ring-secondary/5
            hover:border-gray-200
            ${icon ? "pl-12 pr-4" : "px-5"} 
            ${error ? "border-red-400 focus:border-red-400" : ""}
          `}
        />
      </div>

      {error && <span className="text-xs text-red-500 ml-1 font-bold">{error}</span>}
    </div>
  );
}
