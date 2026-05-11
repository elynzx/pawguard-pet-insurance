import { CaretRightIcon, CaretLeftIcon } from "@phosphor-icons/react";

interface NavigationProps {
  onBack: () => void;
  onNext?: () => void;
  nextLabel?: string;
  backLabel?: string;
  isNextDisabled?: boolean;
  isSubmitting?: boolean;
}

export const StepNavigator = ({
  onNext,
  onBack,
  nextLabel = "Continuar",
  backLabel = "Volver atrás",
  isNextDisabled = false,
  isSubmitting = false,
}: NavigationProps) => {

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-6 ">

      <button
        type="button"
        onClick={onBack}
        className="flex items-center font-heading gap-2 text-primary/50 font-bold hover:text-primary transition-all group order-2 md:order-1 cursor-pointer"
      >
        <CaretLeftIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
        {backLabel}
      </button>

      <button
        type={onNext ? "button" : "submit"}
        onClick={onNext}
        disabled={isNextDisabled || isSubmitting}
        className={`w-full md:w-auto px-8 btn-base transition-all flex items-center justify-center gap-2 order-1 md:order-2 cursor-pointer
          ${!isNextDisabled && !isSubmitting
            ? "bg-tertiary hover:scale-105"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"}
        `}
      >
        {isSubmitting ? "Procesando..." : nextLabel}
        {!isSubmitting && <CaretRightIcon size={20} weight="bold" />}
      </button>
    </footer>
  );
};
