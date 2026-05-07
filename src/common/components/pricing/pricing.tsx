import { PricingCard } from "../pricing-card/pricing-card";
import { PLANS } from "../../data/plans"
import { useState } from "react";

export const Pricing = () => {

  const [selectedPlan, setSelectedPlan] = useState<string>(
    PLANS.find(p => p.recommended)?.name || PLANS[0].name
  )

  return (
    <section id="planes" className="w-full px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-26 space-y-4 flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-black text-primary font-heading tracking-tight">
          Invierte en su felicidad
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Planes diseñados por expertos para que nunca tengas que elegir entre tu bolsillo y la salud de tu mascota.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 items-end">
        {PLANS.map((plan) => (
          <PricingCard
            {...plan}
            isSelected={plan.name === selectedPlan}
            onClick={() => setSelectedPlan(plan.name)}
          />
        ))}
      </div>
    </section>
  );
};
