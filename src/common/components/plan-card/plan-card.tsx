import { CheckCircleIcon } from "@phosphor-icons/react";
import type { PlanProps } from "../../types/type-props";

const CARD_VARIANTS = {
    active: {
        container: "border-3 border-secondary shadow-xl scale-100 z-10 md:-translate-y-4",
        button: "bg-secondary text-white hover:brightness-110 shadow-md",
        icon: "text-secondary",
    },
    inactive: {
        container: "border-3 border-secondary/10 hover:border-secondary-light cursor-pointer",
        button: "bg-white border-2 border-secondary/20 text-secondary hover:border-secondary hover:bg-secondary/5",
        icon: "text-secondary-light",
    },
};

export const PlanCard = ({
    name,
    price,
    description,
    features,
    recommended,
    showBadge = true,
    buttonLabel = "Elegir Plan",
    isSelected,
    onClick,
}: PlanProps) => {

    const style = isSelected ? CARD_VARIANTS.active : CARD_VARIANTS.inactive;

    return (
        <article
            onClick={onClick}
            className={`relative shadow-sm h-120  bg-white p-8 rounded-2xl transition-all duration-500 flex flex-col ${style.container}`}
        >
            {recommended && showBadge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-secondary text-white text-md font-bold py-2 px-8 rounded-full z-20 shadow-sm">
                    Recomendado
                </div>
            )}

            <div className="mb-8 relative z-10 ">
                <h3 className="text-2xl font-heading font-black text-primary mb-2">
                    {name}
                </h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-primary/40 uppercase">S/</span>
                    <span className="text-5xl font-heading font-black text-primary">
                        {price.toFixed(2)}
                    </span>
                    <span className="text-primary/60 font-medium">/mes</span>
                </div>
                <p className="text-primary mt-4 font-medium text-sm">
                    {description}
                </p>
            </div>

            <ul className="space-y-4 mb-10 relative z-10 grow">
                {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon size={22} weight="fill" className={style.icon} />
                        <span className="text-sm font-semibold text-primary/80">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            <button
                className={`btn-base w-full transition-all active:scale-95 relative z-10 font-bold ${style.button}`}
            >
                {isSelected ? "Continuar compra" : buttonLabel}
            </button>
        </article>
    );
};