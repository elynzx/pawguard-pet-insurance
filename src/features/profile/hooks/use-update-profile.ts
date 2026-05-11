import { useState } from "react";
import { updateOwner, updatePet } from "../service/update-profile";
import type { PetUpdate, ProfileUpdate } from "../../../common/types/type-props";

export const useUpdateOwner = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const executeUpdate = (userId: string, data: ProfileUpdate) => {
    setIsUpdating(true);
    return updateOwner(userId, data)
      .finally(() => setIsUpdating(false));
  };

  return { updateOwner: executeUpdate, isUpdating };
};

export const useUpdatePet = () => {
  const [isUpdating, setIsUpdating] = useState(false);

  const executeUpdate = (userId: string, data: PetUpdate) => {
    setIsUpdating(true);

    return updatePet(userId, data)
      .finally(() => setIsUpdating(false));
  };

  return { updatePet: executeUpdate, isUpdating };
};