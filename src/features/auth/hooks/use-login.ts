import { useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "../services/auth-service";
import { useUser } from "../../../common/providers/useUser";

export function useLogin() {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = (email: string, pass: string) => {
    setLoading(true);
    setError(null);

    authService.login(email, pass)
      .then(({ data, error: authError }) => {
        if (authError) throw authError;

        if (data.user) {
          setUser(data.user);
          navigate("/profile");
        }
      })
      .catch((error) => {
        let message = "Ocurrió un error inesperado";

        if (error.message === "Invalid login credentials") {
          message = "Email o contraseña incorrectos";
        }
        setError(message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { login, loading, error };
}
