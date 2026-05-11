import { useState } from "react";
import type { PetUpdate } from "../../../common/types/type-props";
import { updatePet } from "../service/update-profile";

export const useUpdatePet = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const update = (userId: string, data: PetUpdate) => {
    setIsUpdating(true);
    setError(null);
    setSuccess(false);

    updatePet(userId, data)
      .then(() => setSuccess(true))
      .catch((err) => setError(err.message || "Error al actualizar"))
      .finally(() => setIsUpdating(false));
  };

  const reset = () => {
    setSuccess(false);
    setError(null);
  };

  return { update, isUpdating, error, success, reset };
};
