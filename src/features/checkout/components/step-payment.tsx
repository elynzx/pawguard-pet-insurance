import { ShieldCheckIcon, PencilSimpleIcon, PawPrintIcon, UserIcon, CheckCircleIcon } from "@phosphor-icons/react";
import { useAppStore } from "../../../common/store/use-app-store";
import { StepNavigator } from "./step-navigator";
import { StepHeader } from "./step-header";

interface StepPaymentProps {
  onBack: () => void;
  onEditProfile: () => void;
  saveCheckout: () => void; 
  loading: boolean;        
  error: string | null;      
}

export function StepPayment({ 
  onBack, 
  onEditProfile, 
  saveCheckout, 
  loading, 
  error
}: StepPaymentProps) {

  const { petData, ownerData, selectedPlan } = useAppStore();

  return (
    <section className="animate-fade-in max-w-4xl mx-auto px-4 space-y-10">
      <StepHeader
        title="Verificación Final"
        description="Revisa que toda la información sea correcta antes de activar la protección."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <SummaryCard
            title="Mascota a Proteger"
            icon={<PawPrintIcon size={24} weight="fill" className="text-secondary" />}
            onEdit={onEditProfile}
          >
            <p className="font-bold text-primary">{petData.name} ({petData.species === 'dog' ? 'Perro' : 'Gato'})</p>
            <p className="text-sm text-gray-500 ">Raza: {petData.breed}</p>
            <p className="text-sm text-gray-500 ">Edad: {petData.age}</p>
          </SummaryCard>

          <SummaryCard
            title="Titular del Seguro"
            icon={<UserIcon size={24} weight="fill" className="text-secondary" />}
            onEdit={onEditProfile}
          >
            <p className="font-bold text-primary">{ownerData.first_name} {ownerData.last_name}</p>
            <p className="text-sm text-gray-500 ">DNI: {ownerData.dni}</p>
            <p className="text-sm text-gray-500 ">Email: {ownerData.email}</p>
          </SummaryCard>
        </div>

        <div className="bg-white rounded-2xl border-2 border-primary/10 p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldCheckIcon size={120} weight="fill" className="text-secondary" />
          </div>

          <div className="space-y-4 relative z-10">
            <h4 className="font-black text-secondary">Plan Seleccionado</h4>
            <h3 className="text-4xl font-black text-primary font-heading">Plan {selectedPlan?.name}</h3>

            <ul className="space-y-2">
              {selectedPlan?.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                  <CheckCircleIcon size={18} weight="fill" className="text-tertiary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-gray-100 mt-4 relative z-10">
            <div className="flex justify-between items-end">
              <p className="text-sm font-semibold">Total a pagar mensual:</p>
              <p className="text-4xl font-black font-heading text-secondary">S/ {selectedPlan?.price?.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-center text-red-500 font-bold bg-red-50 p-3 rounded-xl border border-red-100 animate-shake">
          {error}
        </p>
      )}

      <StepNavigator
        onNext={saveCheckout} 
        onBack={onBack}
        nextLabel={loading ? "Procesando..." : "Activar Protección Ahora"}
        backLabel="Cambiar Plan"
        isNextDisabled={loading}
      />
    </section>
  );
}

const SummaryCard = ({ title, icon, children, onEdit }: any) => (
  <div className="bg-white rounded-2xl border-2 border-primary/10 p-10 relative group">
    <button
      onClick={onEdit}
      className="absolute top-6 right-6 p-2 hover:bg-secondary/10 rounded-full text-secondary transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
    >
      <PencilSimpleIcon size={18} weight="bold" />
    </button>

    <div className="flex gap-4">
      <div className="flex items-start justify-center">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-secondary text-sm font-black ">{title}</p>
        <div className="text-primary">{children}</div>
      </div>
    </div>
  </div>
);
