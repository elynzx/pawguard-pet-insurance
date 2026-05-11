import { OwnerForm } from "../../../common/components/owner-form/owner-form";
import { useUser } from "../../../common/providers/useUser";
import { useAppStore } from "../../../common/store/use-app-store";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";
import { useUpdateOwner } from "../hooks/use-update-owner";

interface Props {
  onCancel: () => void;
}

export const OwnerEditForm = ({ onCancel }: Props) => {
  const { ownerData } = useAppStore();
  const { user } = useUser();
  const { update, isUpdating, error, success, reset } = useUpdateOwner();

  const handleUpdate = () => {
    if (!user) return;
    update(user.id, ownerData);
  };

  const handleCloseAlert = () => {
    reset();
    if (success) onCancel();
  };

  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 space-y-8">
      <OwnerForm />
      <div className="flex flex-col sm:flex-row justify-between gap-4 md:gap-8 pt-4 md:pt-0">
        <button
          onClick={onCancel}
          className="btn-base w-full py-4 rounded-full bg-primary/60 text-white font-bold"
          disabled={isUpdating}>
          Cancelar
        </button>

        <button
          onClick={handleUpdate}
          className="btn-base bg-tertiary py-4 rounded-full w-full"
        >
          {isUpdating ? "Guardando..." : "Guardar datos"}
        </button>
      </div>
      <AlertModal
        isOpen={success || !!error}
        onClose={handleCloseAlert}
        type={success ? "success" : "error"}
        title={success ? "Perfil actualizado" : "Error al actualizar"}
        message={success ? "Tus datos se guardaron correctamente." : error || ""}
      />
    </div>
  );
};
