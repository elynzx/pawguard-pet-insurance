import { useState } from "react";
import { PawPrintIcon, UserIcon, LayoutIcon, CircleNotchIcon, LockIcon } from "@phosphor-icons/react";
import { useAppStore } from "../../../../common/store/use-app-store";
import { DashboardTabs } from "../../components/dashboard-tabs";
import { ProfileSidebar } from "../../components/profile-sidebar";
import { OwnerEditForm } from "../../components/owner-edit-form";
import { PetEditForm } from "../../components/pet-edit-form";
import { PetPlanCard } from "../../components/pet-plan-card";
import { useDistricts } from "../../../../common/hooks/use-districts";
import { useProfile } from "../../hooks/use-profile";
import { SecurityForm } from "../../components/security-form";
import { formatFullName, getDistrictName } from "../../utils/formatters";

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const { ownerData, petData, selectedPlan } = useAppStore();
  const { loading } = useProfile();
  const { districts } = useDistricts();

  const districtName = getDistrictName(districts, ownerData.district_id || "");
  const fullName = formatFullName(ownerData.first_name, ownerData.last_name);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-primary">
        <CircleNotchIcon size={48} weight="bold" className="animate-spin text-secondary" />
        <p className="font-black italic text-xl">Cargando tus datos...</p>
      </div>
    );
  }

  return (
    <main className="py-18 px-6 mt-6 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-10">

        <header className="space-y-6">
          <h1 className="text-4xl font-heading font-black text-primary">Mi Cuenta</h1>
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <ProfileSidebar
            name={fullName}
            dni={ownerData.dni || "—"}
            email={ownerData.email || "—"}
            district={districtName}
            onEdit={() => setActiveTab('profile')}
          />

          <section className="lg:col-span-2">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-black text-primary flex items-center gap-3">
                  <LayoutIcon size={28} weight="fill" className="text-primary" />
                  Panel General
                </h2>
                <PetPlanCard
                  pet={{
                    name: petData.name || "Sin nombre",
                    species: petData.species || "Mascota",
                    breed: petData.breed || "Raza",
                    age: petData.age || "Edad"
                  }}
                  plan={{ name: selectedPlan?.name || "Sin plan" }}
                  onEditClick={() => setActiveTab('pets')}
                />
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-black text-primary flex items-center gap-3">
                  <UserIcon size={28} weight="fill" className="text-primary" />
                  Mis Datos Personales
                </h2>
                <OwnerEditForm onCancel={() => setActiveTab('dashboard')} />
              </div>
            )}

            {activeTab === 'pets' && (
              <div className="space-y-6">
                <h2 className="text-2xl text-primary font-heading font-black flex items-center gap-3">
                  <PawPrintIcon size={28} weight="fill" className="text-primary" />
                  Datos de Mi Mascota
                </h2>
                <PetEditForm onCancel={() => setActiveTab('dashboard')} />
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-heading font-black text-primary flex items-center gap-3">
                  <LockIcon size={28} weight="fill" className="text-primary" />
                  Actualizar Contraseña
                </h2>
                <SecurityForm />
              </div>
            )}

          </section>
        </div>
      </div>
    </main>
  );
}
