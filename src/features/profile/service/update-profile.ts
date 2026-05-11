import { supabase } from "../../../common/utils/supabase";
import type {
  ProfileUpdate,
  PetUpdate,
} from "../../../common/types/type-props";

export const updateOwner = async (userId: string, data: ProfileUpdate) => {
  const { error } = await supabase
    .from("profiles")
    .update(data)
    .eq("id", userId);

  if (error) throw error;
};

export const updatePet = async (ownerId: string, data: PetUpdate) => {
  const { error } = await supabase
    .from("pets")
    .update(data)
    .eq("owner_id", ownerId);

  if (error) throw error;
};

export const updateFullProfile = async (
  userId: string,
  profileData: ProfileUpdate,
  petData: PetUpdate,
) => {
  await Promise.all([
    updateOwner(userId, profileData),
    updatePet(userId, petData),
  ]);
};
