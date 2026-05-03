import { CheckCircleIcon } from "@phosphor-icons/react";

interface Plan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  recommended?: boolean;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: "Esencial",
    price: "24.90",
    desc: "Tranquilidad inmediata ante accidentes en casa o paseos.",
    features: ["Atención por accidentes", "Consultas de emergencia", "Red de clínicas en Lima", "Asistencia telefónica"],
    cta: "Elegir Esencial"
  },
  {
    name: "Plus",
    price: "34.90",
    desc: "El balance ideal para la salud preventiva de tu mascota.",
    features: ["Todo lo del plan Esencial", "Tele-vet 24/7 ilimitada", "1 Chequeo preventivo anual", "Descuento en farmacias"],
    recommended: true,
    cta: "Obtener Plus"
  },
  {
    name: "Premium",
    price: "44.90",
    desc: "Cobertura completa para una vida larga y saludable.",
    features: ["Todo lo del plan Plus", "Vacunas anuales (Triple/Rabia)", "Desparasitación interna", "Limpieza de oídos y corte"],
    cta: "Pasar a Premium"
  },
];

export const Pricing = () => {
  return (
    <section className="w-full py-8 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-26 space-y-4 flex flex-col gap-4">
        <h2 className="text-4xl md:text-5xl font-black text-c-dark-gray font-heading tracking-tight">
          Invierte en su felicidad
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Planes diseñados por expertos para que nunca tengas que elegir entre tu bolsillo y la salud de tu mascota.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`relative p-8 rounded-2xl transition-all duration-500 flex flex-col h-full animate-fade-up opacity-0
              ${plan.recommended
                ? "bg-white border-3 border-c-blue shadow-lg scale-105 z-10 md:-translate-y-4 md:animate-float"
                : "bg-c-light-blue/20 border-2 border-transparent hover:border-gray-200"
              }`}
          >
            {plan.recommended && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-c-blue text-white text-xs font-black tracking-widest py-2 px-6 rounded-full z-20">
                MÁS POPULAR
              </div>
            )}

            {plan.recommended && (
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 bg-linear-to-r from-transparent via-white/10 to-transparent animate-shine" />
              </div>
            )}

            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-heading font-black text-c-dark-gray mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-bold text-gray-400 uppercase">S/</span>
                <span className="text-5xl font-heading font-black text-c-dark-gray">{plan.price}</span>
                <span className="text-gray-400 font-medium">/mes</span>
              </div>
              <p className="text-gray-500 mt-4 leading-relaxed font-medium">
                {plan.desc}
              </p>
            </div>

            <div className="space-y-4 mb-10 grow relative z-10">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 group">
                  <CheckCircleIcon
                    size={22}
                    weight="fill"
                    className={plan.recommended ? "text-c-blue" : "text-c-light-blue"}
                  />
                  <span className="text-sm font-semibold text-c-dark-gray/80">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-95 relative z-10
                ${plan.recommended
                  ? "bg-c-blue text-white hover:bg-c-blue hover:brightness-105 transition-all"
                  : "bg-white border-2 border-c-blue/20 text-c-blue hover:border-c-blue"}`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
