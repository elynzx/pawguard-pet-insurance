import { useNavigate } from "react-router";
import { useAppStore } from "../../../../common/store/use-app-store";

export const HeroForm = () => {
  const navigate = useNavigate();
  const { petData, setPetData } = useAppStore();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/checkout");
  };


  return (
    <div id="hero-form" className="col-span-2 bg-white p-6 rounded-2xl shadow-xl shadow-blue-900/5 max-w-md md:max-w-sm text-sm w-full border-2 border-secondary/40">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Nombre de tu mascota"
          value={petData.name || ""}
          onChange={(e) => setPetData({ name: e.target.value })}
          className="w-full px-6 py-3 rounded-lg bg-secondary-light/30 focus:outline-none focus:ring-2 focus:ring-secondary font-medium text-primary"
        />

        <select
          value={petData.species || ""}
          onChange={(e) => setPetData({ species: e.target.value as "dog" | "cat" })}
          className="w-full px-6 py-3 rounded-lg bg-secondary-light/30 focus:outline-none focus:ring-2 focus:ring-secondary font-medium appearance-none text-primary"
        >
          <option value="" disabled>¿Perro o Gato?</option>
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
        </select>

        <button
          onClick={handleContinue}
          className="btn-base mt-3 py-4 bg-tertiary w-full hover:brightness-105 transition-all text-primary font-bold"
        >
          Ver Cobertura
        </button>
      </div>
    </div>
  );
};
