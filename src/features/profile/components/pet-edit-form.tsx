import { useState } from "react";
import { PetForm } from "../../../common/components/pet-form/pet-form";
import { useUser } from "../../../common/providers/useUser";
import { useAppStore } from "../../../common/store/use-app-store";
import { useUpdatePet } from "../hooks/use-update-profile";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";

interface PetEditFormProps {
  onCancel: () => void;
}
export const PetEditForm = ({ onCancel }: PetEditFormProps) => {
  const { petData } = useAppStore();
  const { user } = useUser();
  const { updatePet, isUpdating } = useUpdatePet();

  const [alertConfig, setAlertConfig] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const handleUpdate = () => {
    if (!user) return;

    updatePet(user.id, petData)
      .then(() => {
        setAlertConfig({
          isOpen: true,
          type: "success",
          title: "¡Mascota actualizada!",
          message: "Los datos de tu compañero se guardaron correctamente.",
        });
      })
      .catch((updateError) => {
        setAlertConfig({
          isOpen: true,
          type: "error",
          title: "Error al actualizar",
          message: updateError.message || "No se pudo actualizar la mascota.",
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
        isOpen={alertConfig.isOpen}
        onClose={handleCloseAlert}
        type={alertConfig.type}
        title={alertConfig.title}
        message={alertConfig.message}
      />
    </div>
  );
};
