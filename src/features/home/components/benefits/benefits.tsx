import { PawPrintIcon } from "@phosphor-icons/react"
import Benefit1 from "../../../../assets/benefit-card/benefit-1.png"
import Benefit2 from "../../../../assets/benefit-card/benefit-2.jpg"
import Benefit3 from "../../../../assets/benefit-card/benefit-3.png"
import Benefit4 from "../../../../assets/benefit-card/benefit-4.jpeg"

const BENEFITS = [
  {
    id: 1,
    title: "Tele-veterinaria 24/7",
    image: Benefit1,
    description: "Consultas ilimitadas por video con expertos, sin salir de casa y a cualquier hora.",
  },
  {
    id: 2,
    title: "Microchip incluido",
    image: Benefit2,
    description: "Identificación oficial para tu mascota, fundamental para su seguridad y protección.",
  },
  {
    id: 3,
    title: "Elección Libre",
    image: Benefit3,
    description: "Visita a tu veterinario de confianza en todo Lima y nosotros te reembolsamos.",
  },
  {
    id: 4,
    title: "Vacuna Anual",
    image: Benefit4,
    description: "Mantenemos sus defensas altas con la vacuna antirrábica incluida en todos los planes.",
  },
]

export const Benefits = () => {
  return (
    <section className="w-full md:px-10 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-primary font-heading">
          Beneficios incluidos en <span className="text-secondary">todos los planes</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {BENEFITS.map((benefit) => (
          <div
            key={benefit.id}
            className="relative h-110 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <img
              src={benefit.image}
              alt={benefit.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-secondary-light/60 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/50 group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 shadow-xl">
                    <PawPrintIcon size={28} weight="fill" className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-white text-center mb-3 drop-shadow-md">
                  {benefit.title}
                </h3>
                <p className="text-sm h-19 text-white text-center font-semibold leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {benefit.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};
