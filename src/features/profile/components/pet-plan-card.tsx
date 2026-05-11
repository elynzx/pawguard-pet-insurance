import { ShieldCheckIcon, BoneIcon, ClockIcon, PawPrintIcon, PencilSimpleIcon } from "@phosphor-icons/react";
import { formatSpecies } from "../utils/formatters";

interface Props {
  pet: {
    name: string;
    breed: string;
    species: string;
    age: string;
  };
  plan: {
    name: string;
  };
  onEditClick: () => void;
}

export const PetPlanCard = ({ 
  pet, 
  plan, 
  onEditClick 
}: Props) => {
  const speciesName = formatSpecies(pet.species);

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden transition-all shadow-md">
      <div className="p-10 md:p-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          <div className="flex flex-col md:flex-row items-center gap-8 w-full lg:w-auto">
            <div className="w-32 h-32 bg-secondary/5 rounded-full flex items-center justify-center text-secondary border-2 border-secondary/10 shrink-0">
              <PawPrintIcon size={64} weight="fill" />
            </div>

            <div className="space-y-4 text-center md:text-left">
              <div>
                <h4 className="text-4xl font-black text-primary font-heading tracking-tight leading-none">
                  {pet.name}
                </h4>
                <button
                  onClick={onEditClick}
                  className="mt-2 text-secondary text-sm font-bold flex items-center justify-center md:justify-start gap-1 hover:underline opacity-80"
                >
                  <PencilSimpleIcon size={18} weight="bold" />
                  Editar información
                </button>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <PawPrintIcon size={20} className="text-primary/20" weight="bold" />
                  <span className="text-lg font-medium">{speciesName}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <BoneIcon size={20} className="text-primary/20" weight="bold" />
                  <span className="text-lg font-medium">{pet.breed}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <ClockIcon size={20} className="text-primary/20" weight="bold" />
                  <span className="text-lg font-medium">{pet.age}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto md:min-w-70">
            <div className="bg-primary/5 rounded-3xl p-8 border-2 border-primary/5 space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheckIcon size={32} weight="fill" className="text-secondary" />
                <span className="text-xs font-black uppercase tracking-widest text-primary/40">Protección Activa</span>
              </div>

              <div>
                <p className="text-sm font-bold text-primary/60">Tu plan actual:</p>
                <h5 className="text-3xl font-black text-primary">Plan {plan.name}</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-secondary-light/30 px-12 py-5 border-t border-gray-100 flex justify-between items-center">
        <p className="text-[11px] font-bold text-primary/80 uppercase tracking-widest flex items-center justify-center gap-4">
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" /> Estatus: Verificado y Protegido
        </p>

      </div>
    </div>
  );
};
