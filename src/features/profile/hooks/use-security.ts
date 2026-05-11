import { useState } from "react";
import { authService } from "../../auth/services/auth-service";

export function useSecurity() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const changePassword = (password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    authService.updatePassword(password)
      .then(({ error }) => {
        if (error) throw error;
        setSuccess(true);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const reset = () => {
    setSuccess(false);
    setError(null);
  };

  return { changePassword, loading, error, success, reset };
}
