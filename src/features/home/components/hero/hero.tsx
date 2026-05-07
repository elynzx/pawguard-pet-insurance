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
    <div className="col-span-2 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 max-w-md md:max-w-sm text-sm w-full border-2 border-secondary/40">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre de tu mascota"
          className="w-full px-6 py-3 rounded-lg bg-secondary-light/30 focus:outline-none focus:ring-2 focus:ring-secondary font-medium"
        />
        <select className="w-full px-6 py-3 rounded-lg bg-secondary-light/30 focus:outline-none focus:ring-2 focus:ring-secondary font-medium appearance-none">
          <option value="">¿Perro o Gato?</option>
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
        <button className="btn-base mt-3 py-4 bg-tertiary w-full hover:brightness-105 transition-all">
          Ver Cobertura
        </button>
      </div>
    </div>
  )
}

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen md:h-220 bg-linear-to-b from-secondary-light via-secondary-light to-secondary/70 flex items-start overflow-hidden z-10">

      <div className="w-full md:max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 z-10 gap-6 mt-10 md:mt-24">
        <div className="md:col-start-1 col-span-1 flex flex-col gap-7 md:items-start">
          <div className="space-y-6 text-start px-4 md:px-0">
            <h1 className="font-heading text-4xl md:text-5xl font-black text-primary">
              Tu mascota, <br /> nuestra prioridad.
            </h1>
            <ul>
              {hero_benefits.map((item) => (
                <li key={item.id} className="mt-2 font-semibold flex gap-2 items-center text-secondary text-lg">
                  {item.icon} <span className="text-primary text-sm">{item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <HeroForm />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex flex-col items-start pointer-events-none z-0">
        <div className="relative w-full max-w-7xl mx-auto h-0 flex">
          <img
            src={HeroDog}
            className="absolute right-0 md:-right-2 -bottom-12 md:-bottom-10 h-70 md:h-125 z-0 object-contain"
            alt="Perro"
          />
          <img
            src={HeroCat}
            className="absolute right-45 md:right-70 -bottom-24 md:-bottom-30 h-50 md:h-86 z-30 object-contain"
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
