import { useState } from "react";
import { useUpdatePassword } from "../hooks/use-update-password";
import { FormInput } from "../../../common/components/form-input/form-input";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";


export const SecurityForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const { changePassword, loading, error, success, reset } = useUpdatePassword();

  const handleUpdate = () => {
    if (newPassword.length < 6) return;
    changePassword(newPassword);
  };

  const handleCloseAlert = () => {
    reset();
    if (success) setNewPassword("");
  };

  return (
    <div className="w-full bg-white p-8 rounded-2xl border-2 border-gray-100 space-y-6 flex flex-col items-center md:py-21 shadow-md">
      <div className="w-full max-w-sm mx-auto space-y-4">
        <FormInput
          label="Ingresar nueva Contraseña"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="Mínimo 6 caracteres"
        />
      </div>

        <button
          onClick={handleUpdate}
          disabled={loading || newPassword.length < 6}
          className="btn-base bg-tertiary px-10 disabled:bg-primary/60 disabled:text-white w-full md:w-sm py-4"
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
