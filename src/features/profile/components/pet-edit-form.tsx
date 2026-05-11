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
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 space-y-8">
      <PetForm />
      <div className="flex justify-between gap-15">
        <button
          disabled={isUpdating}
          onClick={onCancel}
          className="btn-base w-full py-4 rounded-full bg-primary/40 text-white font-bold">
          Cancelar
        </button>

        <button
          onClick={handleUpdate}
          className="btn-base bg-tertiary py-4 rounded-full w-full"
        >
          Actualizar Mascota
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
