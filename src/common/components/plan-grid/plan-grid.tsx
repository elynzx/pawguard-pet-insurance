import { useGetPlans } from "../../hooks/use-plans";
import { useCheckoutStore } from "../../store/use-checkout-store";
import { PlanCard } from "../plan-card/plan-card";
import type { PlanRow } from "../../types/type-props";

interface PlanGridProps {
  onPlanSelect?: (plan: PlanRow) => void;
}

export function PlanGrid({ onPlanSelect }: PlanGridProps) {
  const { plans, loading, error } = useGetPlans();
  const setSelectedPlan = useCheckoutStore((state) => state.setSelectedPlan);
  const selectedPlanId = useCheckoutStore((state) => state.selectedPlan?.id);

  if (error)
    return (
      <div className="text-center py-20 text-secondary">Ha ocurrido un error. Por favor intenta luego.</div>
    );

  return (
    <section id="planes" className="w-full px-6 max-w-7xl mx-auto py-10">
      {!onPlanSelect && (
        <div className="text-center mb-12 md:mb-26 space-y-4 flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-black text-primary font-heading tracking-tight">
            Invierte en su felicidad
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Planes diseñados por expertos para que nunca tengas que
            elegir entre tu bolsillo y la salud de tu mascota.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 items-end">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            isSelected={plan.id === selectedPlanId}
            onClick={() => {
              setSelectedPlan(plan);
              if (onPlanSelect) onPlanSelect(plan);
            }}
          />
        ))}
      </div>
    </section>
  );
}
