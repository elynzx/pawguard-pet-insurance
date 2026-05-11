import { useState } from "react";
import { OwnerForm } from "../../../common/components/owner-form/owner-form";
import { useUser } from "../../../common/providers/useUser";
import { useAppStore } from "../../../common/store/use-app-store";
import { useUpdateOwner } from "../hooks/use-update-profile";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";

interface Props {
  onCancel: () => void;
}

export const OwnerEditForm = ({ onCancel }: Props) => {
  const { ownerData } = useAppStore();
  const { user } = useUser();
  const { updateOwner, isUpdating } = useUpdateOwner();

  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const handleUpdate = () => {
    if (!user) return;

    updateOwner(user.id, ownerData)
      .then(() => {
        setAlertConfig({
          isOpen: true,
          type: "success",
          title: "¡Perfil actualizado!",
          message: "Tus datos se guardaron correctamente en el sistema.",
        });
      })
      .catch((updateError) => {
        setAlertConfig({
          isOpen: true,
          type: "error",
          title: "Error al actualizar",
          message: updateError.message || "No se pudo guardar la información.",
        });
      });
  };

  const handleCloseAlert = () => {
    setAlertConfig((previousAlertConfig) => ({ ...previousAlertConfig, isOpen: false }));
    if (alertConfig.type === "success") {
      onCancel();
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 space-y-8 animate-fade-in">
      <OwnerForm />
      <div className="flex justify-between gap-15">
        <button
          onClick={onCancel}
          className="btn-base w-full py-4 rounded-full bg-primary/40 text-white font-bold"
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
        isOpen={alertConfig.isOpen}
        onClose={handleCloseAlert}
        type={alertConfig.type}
        title={alertConfig.title}
        message={alertConfig.message}
      />
    </div>
  );
};
