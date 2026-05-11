import type { PetRow, PlanRow, ProfileRow } from "../../../common/types/type-props";
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

export const getActivePlan = async (petId: string): Promise<PlanRow | null> => {
  const { data, error } = await supabase
    .from("subscriptions")
    .select(`plans (*)`)
    .eq("pet_id", petId)
    .eq("status", "active")
    .maybeSingle();

  if (error) throw error;
  if (!data || !data.plans) return null;
  return data.plans as unknown as PlanRow;
};



export const getFullProfile = async (userId: string) => {
  const [profile, pet] = await Promise.all([
    getProfile(userId),
    getPetByOwner(userId)
  ]);

  const plan = await getActivePlan(pet.id);

  return { profile, pet, plan };
};
