import { useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "../services/auth-service";
import { useAppStore } from "../../../common/store/use-app-store";

export function useLogout() {
  const navigate = useNavigate();
  const { resetAppStore } = useAppStore();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);

    authService.logout()
      .then(({ error: authError }) => {
        if (authError) throw authError;
        
        resetAppStore();
        navigate("/");
      })
      .catch((logoutError) => {
        console.error("Error al salir:", logoutError.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { handleLogout, loading };
}
