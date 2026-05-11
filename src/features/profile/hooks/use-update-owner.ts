import { useState } from "react";
import { updateOwner } from "../service/update-profile";
import type { ProfileUpdate } from "../../../common/types/type-props";

export const useUpdateOwner = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const update = (userId: string, data: ProfileUpdate) => {
    setIsUpdating(true);
    setError(null);
    setSuccess(false);

    updateOwner(userId, data)
      .then(() => setSuccess(true))
      .catch((err) => setError(err.message || "Error al actualizar"))
      .finally(() => setIsUpdating(false));
  };

  const reset = () => { setSuccess(false); setError(null); };

  return { update, isUpdating, error, success, reset };
};