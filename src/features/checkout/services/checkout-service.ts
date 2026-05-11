import { supabase } from "../../../common/utils/supabase";

export const checkoutService = {
  async signUp(email: string, dni: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password: dni,
    });
    if (error) throw error;
    return data.user?.id;
  },

  async createProfile(userId: string, data: any) {
    const { id, ...cleanData } = data;
    const { error } = await supabase
      .from("profiles")
      .insert([{ ...cleanData, id: userId }]);
    if (error) throw error;
  },

  async createPet(userId: string, data: any) {
    const { id, ...cleanData } = data;
    const { data: pet, error } = await supabase
      .from("pets")
      .insert([{ ...cleanData, owner_id: userId }])
      .select()
      .single();
    if (error) throw error;
    return pet;
  },

  async createSubscription(petId: string, planId: string) {
    const { error } = await supabase.from("subscriptions").insert([
      {
        pet_id: petId,
        plan_id: planId,
        status: "active",
        start_date: new Date().toISOString(),
      },
    ]);
    if (error) throw error;
  },
};
