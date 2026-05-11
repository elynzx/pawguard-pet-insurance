import { useState } from "react";
import { useGetPlans } from "../../hooks/use-plans";
import { useAppStore } from "../../store/use-app-store";
import { PlanCard } from "../plan-card/plan-card";
import type { PlanRow } from "../../types/type-props";
import { CatIcon, CircleNotchIcon, DogIcon } from "@phosphor-icons/react";

interface PlanGridProps {
  onPlanSelect?: (plan: PlanRow) => void;
  initialSpecies?: "dog" | "cat";
}

const TabButton = ({ active, onClick, label, Icon }: any) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-6 px-10 py-4 rounded-full transition-all duration-500
        ${active ? "bg-tertiary text-primary shadow-xl" : "text-primary/50 hover:text-secondary hover:bg-secondary/5"}
      `}
    >
      <Icon size={28} weight={"bold"} />
      <span className="text-lg font-heading font-bold">{label}</span>
    </button>
  );
};

export const PlanGrid = ({
  onPlanSelect,
  initialSpecies
}: PlanGridProps) => {
  const { plans, loading, error } = useGetPlans();
  const setSelectedPlan = useAppStore((state) => state.setSelectedPlan);
  const selectedPlanId = useAppStore((state) => state.selectedPlan?.id);

  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const activeSpecies = initialSpecies || petType;
  const filteredPlans = plans.filter(
    (plan) => plan.target_species === activeSpecies
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-primary">
        <CircleNotchIcon size={48} weight="bold" className="animate-spin text-secondary" />
        <p className="font-black italic text-xl">Cargando planes...</p>
      </div>
    );
  }


  if (error)
    return (
      <div className="text-center py-20 text-secondary font-medium">
        Ha ocurrido un error. Por favor intenta más tarde.
      </div>
    );

  return (
    <div className="mt-12">

      {!initialSpecies && (
        <div className="flex justify-center mb-20">
          <div className="flex gap-12 bg-white/80 rounded-full shadow-inner border border-gray-200 p-2">
            <TabButton
              active={petType === "dog"}
              onClick={() => setPetType("dog")}
              label="Perros"
              Icon={DogIcon}
            />
            <TabButton
              active={petType === "cat"}
              onClick={() => setPetType("cat")}
              label="Gatos"
              Icon={CatIcon}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {filteredPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            isSelected={plan.id === selectedPlanId}
            isCheckout={!!initialSpecies}
            onClick={() => {
              setSelectedPlan(plan);
              if (onPlanSelect) onPlanSelect(plan);
            }}
          />
        ))}
      </div>
    </div>
  );
};
