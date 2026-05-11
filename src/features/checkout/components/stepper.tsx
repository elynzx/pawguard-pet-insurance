import { UserIcon, ShieldCheckIcon, CreditCardIcon, CheckIcon } from "@phosphor-icons/react";

interface StepperProps {
  currentStep: number;
}

export function Stepper({ currentStep }: StepperProps) {
  const steps = [
    { id: 1, label: "1. Registro", icon: UserIcon },
    { id: 2, label: "2. Plan", icon: ShieldCheckIcon },
    { id: 3, label: "3. Pago", icon: CreditCardIcon },
  ];

  return (
    <nav className="w-full max-w-2xl mx-auto mb-10">
      <ul className="flex items-center justify-between relative">

        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
        
        <div 
          className="absolute top-1/2 left-0 h-0.5 bg-secondary -translate-y-1/2 z-0 transition-all duration-500" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.id;
          const isActive = currentStep === step.id;
          const Icon = step.icon;

          return (
            <li key={step.id} className="relative z-10 flex flex-col items-center gap-2">
              <div 
                className={`
                  w-16 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2
                  ${isCompleted ? "bg-secondary border-secondary text-white" : ""}
                  ${isActive ? "bg-white border-secondary text-secondary scale-120" : ""}
                  ${!isActive && !isCompleted ? "bg-white border-gray-200 text-primary/30" : ""}
                `}
              >
                {isCompleted ? (
                  <CheckIcon size={24} weight="bold" />
                ) : (
                  <Icon size={24} weight={isActive ? "fill" : "regular"} />
                )}
              </div>
              
              <span className={`
                text-xs font-bold uppercase tracking-wider transition-colors duration-500
                ${isActive || isCompleted ? "text-primary" : "text-primary/30"}
              `}>
                {step.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
