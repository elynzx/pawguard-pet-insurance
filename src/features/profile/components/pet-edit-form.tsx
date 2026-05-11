import { PetForm } from "../../../common/components/pet-form/pet-form";
import { useUser } from "../../../common/providers/useUser";
import { useAppStore } from "../../../common/store/use-app-store";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";
import { useUpdatePet } from "../hooks/use-update-pet";

interface PetEditFormProps {
  onCancel: () => void;
}
export const PetEditForm = ({ onCancel }: PetEditFormProps) => {
  const { petData } = useAppStore();
  const { user } = useUser();
  const { update, isUpdating, error, success, reset } = useUpdatePet();

  const handleUpdate = () => {
    if (!user) return;
    update(user.id, petData);
  };

  const handleCloseAlert = () => {
    reset();
    if (success) onCancel();
  };

  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 space-y-8 shadow-md">
      <PetForm />
      <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-8 pt-4 md:pt-0">
        <button
          disabled={isUpdating}
          onClick={onCancel}
          className="btn-base w-full px-2 md:py-4 rounded-full bg-primary/60 text-white font-bold">
          Cancelar
        </button>

        <button
          onClick={handleUpdate}
          className="btn-base bg-tertiary md:py-4 rounded-full w-full"
        >
          Actualizar
        </button>
      </div>
      <AlertModal
        isOpen={success || !!error}
        onClose={handleCloseAlert}
        type={success ? "success" : "error"}
        title={success ? "Datos actualizados" : "Error al actualizar"}
        message={success ? "Los datos de tu mascota se guardaron correctamente." : error || ""}
      />
    </div>
  );
};
