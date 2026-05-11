import { useState } from "react";
import { useSecurity } from "../hooks/use-security";
import { FormInput } from "../../../common/components/form-input/form-input";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";


export const SecurityForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const { changePassword, loading, error, success, reset } = useSecurity();

  const handleUpdate = () => {
    if (newPassword.length < 6) return;
    changePassword(newPassword);
  };

  const handleCloseAlert = () => {
    reset();
    if (success) setNewPassword("");
  };

  return (
    <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 space-y-6">
      <div className="space-y-4">
        <h3 className="text-xl font-black text-primary italic">Actualizar Contraseña</h3>

        <FormInput
          label="Nueva Contraseña"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres"
        />
      </div>

      <button
        onClick={handleUpdate}
        disabled={loading || newPassword.length < 6}
        className="btn-base bg-secondary text-white px-10 disabled:bg-gray-300"
      >
        {loading ? "Cambiando..." : "Guardar Nueva Clave"}
      </button>

      <AlertModal
        isOpen={success || !!error}
        onClose={handleCloseAlert}
        type={success ? "success" : "error"}
        title={success ? "Contraseña actualizada" : "Error de seguridad"}
        message={success ? "Tu clave ha sido cambiada con éxito." : error || ""}
      />
    </div>
  );
};
