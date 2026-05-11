import type { PetRow, ProfileRow } from "../../../common/types/type-props";
import { supabase } from "../../../common/utils/supabase";

export const getProfile = async (userId: string): Promise<ProfileRow> => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
    
  if (error) throw error;
  return data;
};

export const getPetByOwner = async (userId: string): Promise<PetRow> => {
  const { data, error } = await supabase
    .from("pets")
    .select("*")
    .eq("owner_id", userId)
    .single();

  if (error) throw error;
  return data;
};

export const getFullProfile = async (userId: string) => {
  const [profile, pet] = await Promise.all([
    getProfile(userId),
    getPetByOwner(userId)
  ]);

  return { profile, pet };
};
