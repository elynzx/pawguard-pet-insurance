import { useAppStore } from "../../../common/store/use-app-store";
import { PlanGrid } from "../../../common/components/plan-grid/plan-grid";
import { StepNavigator } from "./step-navigator";
import { StepHeader } from "./step-header";


interface StepPlanProps {
  onNext: () => void;
  onBack: () => void;
}

export function StepPlan({ onNext, onBack }: StepPlanProps) {
  const { petData, selectedPlan } = useAppStore();

  return (
    <div className="space-y-10 animate-fade-in max-w-7xl mx-auto px-4">
      <StepHeader
        title="Elige el plan ideal"
        description={`Te mostramos los planes adecuados para tu ${petData.species === 'dog' ? 'perro' : 'gato'}.`}
      />

      <PlanGrid
        initialSpecies={petData.species as "dog" | "cat"}
      />

      {selectedPlan && (
        <div className="text-center p-4 bg-secondary/5 rounded-2xl border-2 border-secondary/20 animate-in zoom-in-95">
          <span className="font-bold text-sm">Tu selección:</span>
          <p className="text-secondary font-black font-heading text-xl mt-2">
            Plan {selectedPlan.name}
          </p>
        </div>
      )}

      <StepNavigator
        onNext={onNext}
        onBack={onBack}
        isNextDisabled={!selectedPlan}
        nextLabel="Confirmar Plan"
        backLabel="Regresar a datos"
      />

    </div>
  );
}
