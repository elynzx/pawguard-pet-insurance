import { PlanGrid } from "../../../../common/components/plan-grid/plan-grid";

export const Plans = () => {
  return (
    <section id="planes" className="w-full px-6 bg-linear-to-t from-white via-secondary-light/70 to-white md:py-30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-primary font-heading tracking-tight">
            Invierte en su felicidad
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Planes diseñados por expertos para que nunca tengas
            que elegir entre tu bolsillo y la salud de tu
            mascota.
          </p>
        </div>
        <PlanGrid />
      </div>
    </section>
  );
};
