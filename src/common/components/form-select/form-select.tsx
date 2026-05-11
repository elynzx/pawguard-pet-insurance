import { useState, type ElementType } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

interface Option {
  value: string | number;
  label: string;
  Icon?: ElementType;
}

interface FormSelectProps {
  label: string;
  value: string | number;
  options: Option[];
  onChange: (value: any) => void;
  placeholder?: string;
}

export function FormSelect({ label, value, options, onChange, placeholder = "Seleccionar" }: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find(opt => opt.value === value);

  return (
    <div className="flex flex-col gap-1 w-full relative">
      <span className="text-primary/80 text-sm ml-1  font-semibold">{label}</span>
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-100 cursor-pointer hover:border-gray-200 transition-all"
      >
        <div className="flex items-center gap-3">
          {selected?.Icon && <selected.Icon size={20} weight="bold" className="text-secondary" />}
          <span className={`${selected ? 'text-primary' : 'text-gray-300'}`}>
            {selected ? selected.label : placeholder}
          </span>
        </div>
        <CaretDownIcon size={18} weight="bold" className="text-primary/40" />
      </div>

      {isOpen && (
        <ul className="absolute top-[110%] left-0 w-full bg-white border-2 border-gray-100 rounded-2xl shadow-xl z-50 max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <li 
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className="flex items-center gap-3 px-5 py-3.5 hover:bg-secondary-light/20 cursor-pointer transition-colors"
            >
              {opt.Icon && <opt.Icon size={20} weight="bold" className="text-secondary" />}
              <span className="font-semibold text-primary">{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
