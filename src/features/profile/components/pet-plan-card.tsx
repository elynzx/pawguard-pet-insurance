import { PawPrintIcon, ShieldCheckIcon, PencilSimpleIcon } from "@phosphor-icons/react";

interface Props {
  pet: {
    name: string;
    breed: string;
    species: string;
    age: string
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
}: Props) => (

  <div className="bg-white rounded-2xl border-2 border-gray-100  transition-all">
    <div className="p-8 flex flex-col md:flex-row justify-between gap-6">

      <div className="flex gap-6">
        <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
          <PawPrintIcon size={40} weight="fill" />
        </div>
        <div className="space-y-1">
          <h4 className="text-2xl  font-heading font-bold text-primary">{pet.name}</h4>
          <p className="text-gray-500 font-medium ">{pet.species} | {pet.breed} | {pet.age}</p>

          <button
            onClick={onEditClick}
            className="text-secondary text-sm font-bold flex items-center gap-1 hover:underline pt-2 cursor-pointer"
          >
            <PencilSimpleIcon size={16} /> Editar datos mascota
          </button>
        </div>
      </div>

      <div className="bg-secondary/5 border-2 border-secondary/20 p-6 rounded-xl flex flex-col justify-between items-center md:items-end min-w-[200px]">
        <div className="text-center md:text-right">
          <p className="text-secondary text-xs font-black">Plan Activo</p>
          <h5 className="text-2xl font-black text-primary">{plan.name}</h5>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <ShieldCheckIcon size={18} weight="fill" className="text-secondary" />
          <span className=" font-bold text-sm">
            Cobertura Activa
          </span>
        </div>
      </div>
    </div>

    <div className="bg-primary/5 px-8 py-4 flex justify-between items-center rounded-b-xl">
      <span className="text-xs text-primary/50 font-bold uppercase tracking-widest">
        Seguro Protegido por PawGuard
      </span>
{/*       <button className="text-primary text-sm hover:text-secondary transition-colors underline cursor-pointer">
        Gestionar Coberturas
      </button> */}
    </div>
  </div>
);
