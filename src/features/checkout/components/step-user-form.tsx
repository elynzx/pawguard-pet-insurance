import { UserIcon, PawPrintIcon} from "@phosphor-icons/react";
import { useAppStore } from "../../../common/store/use-app-store";
import { useNavigate } from "react-router";
import { OwnerForm } from "../../../common/components/owner-form/owner-form";
import { PetForm } from "../../../common/components/pet-form/pet-form";
import { StepNavigator } from "./step-navigator";
import { StepHeader } from "./step-header";

export function StepUserForm({ onNext }: { onNext: () => void }) {
  const navigate = useNavigate();
  const { petData, setPetData } = useAppStore();

  return (
    <section className="animate-fade-in space-y-2 w-full max-w-7xl mx-auto px-4">
      <StepHeader title="¡Casi listo!" description="Completa los datos para el contrato de protección."
      />

      <form onSubmit={(e) => { e.preventDefault(); onNext(); }} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          <article className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border-2 border-secondary/20 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-secondary border-b border-secondary/10 pb-4">
              <PawPrintIcon size={28} weight="fill" />
              <h3 className="text-lg font-black text-secondary uppercase tracking-tight">Datos de {petData.name || 'tu mascota'}</h3>
            </div>

            <div className="grow">
              <PetForm />

              <div className="pt-6 border-t border-gray-100 mt-6">
                <label className="flex gap-3 cursor-pointer group items-start">
                  <input
                    type="checkbox"
                    checked={!!petData.is_companion_animal}
                    onChange={(e) => setPetData({ is_companion_animal: e.target.checked })}
                    required
                    className="mt-1 accent-secondary h-4 w-4 rounded"
                  />
                  <span className="text-[11px] leading-tight text-gray-500 group-hover:text-gray-700 transition-colors font-medium">
                    Declaro que mi mascota es de <strong>compañía</strong> y no realiza actividades de caza o tareas de vigilancia.
                  </span>
                </label>
              </div>
            </div>
          </article>

          <article className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-xl shadow-blue-900/5 border-2 border-secondary/20 flex flex-col gap-6">
            <div className="flex items-center gap-3 text-secondary border-b border-secondary/10 pb-4">
              <UserIcon size={28} weight="fill" />
              <h3 className="text-lg font-black text-secondary uppercase tracking-tight">Tus datos personales</h3>
            </div>

            <div className="grow">
              <OwnerForm />
            </div>
          </article>
        </div>

        <StepNavigator
          onBack={() => navigate("/")}
          backLabel="Cancelar y volver al inicio"
          nextLabel="Ver planes disponibles"
        />
      </form>
    </section>
  );
}
