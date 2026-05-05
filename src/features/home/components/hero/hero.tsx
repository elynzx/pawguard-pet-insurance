import { HeroWaves } from "../../../../common/components/ui/header-wave"
import HeroDog from "../../../../assets/hero-dog.svg"
import HeroCat from "../../../../assets/hero-cat.svg"
import { FirstAidIcon, ScissorsIcon, VideoConferenceIcon } from "@phosphor-icons/react"

const hero_benefits = [
  { id: 1, description: "Teleconsultas ilimitadas", icon: <VideoConferenceIcon weight="fill" /> },
  { id: 2, description: "Dscto en grooming", icon: <ScissorsIcon weight="fill" /> },
  { id: 3, description: "Cobertura hasta s/7000 al año", icon: <FirstAidIcon weight="fill" /> },
]

const HeroForm = () => {
  return (
    <div className="col-span-2 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 max-w-sm text-sm w-full border-2 border-c-blue/40">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre de tu mascota"
          className="w-full px-6 py-3 rounded-lg bg-c-light-blue/30 focus:outline-none focus:ring-2 focus:ring-c-blue font-medium"
        />
        <select className="w-full px-6 py-3 rounded-lg bg-c-light-blue/30 focus:outline-none focus:ring-2 focus:ring-c-blue font-medium appearance-none">
          <option value="">¿Perro o Gato?</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
        <button className="btn-base mt-3 bg-c-yellow w-full hover:brightness-105 transition-all">
          Ver Cobertura
        </button>
      </div>
    </div>
  )
}

export const Hero = () => {
  return (
    <section className="relative w-full h-240 md:h-210 bg-c-light-blue flex items-start overflow-hidden z-10">

      <div className="w-full md:max-w-432 px-4 grid grid-cols-1 md:grid-cols-2 z-10 gap-36 md:mt-28 ml-22">
        <div className="md:col-start-2 col-span-1 flex flex-col gap-7 items-start">
          <div className="space-y-6">
            <h1 className="font-heading text-5xl font-black text-c-dark-gray">
              Tu mascota, <br /> nuestra prioridad.
            </h1>
            <ul>
              {hero_benefits.map((item) => (
                <li key={item.id} className="mt-2 font-semibold flex gap-2 items-center text-c-blue text-lg">
                  {item.icon} <span className="text-c-dark-gray text-sm">{item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <HeroForm />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex flex-col items-start pointer-events-none">
        <div className="relative w-full max-w-7xl mx-auto h-0 flex items-end">
          <img
            src={HeroDog}
            className="absolute -left-2 -bottom-12 md:-bottom-10 h-100 md:h-125 z-0 object-contain"
            alt="Perro"
          />
          <img
            src={HeroCat}
            className="absolute left-55 md:left-79 -bottom-24 md:-bottom-27 h-62 md:h-86 z-30 object-contain"
            alt="Gato"
          />
        </div>
        <div className="relative z-20 w-full min-w-360 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0">
          <HeroWaves />
        </div>
      </div>

    </section>
  );
};
