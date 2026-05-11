import type { AuthResponse, AuthError } from "@supabase/supabase-js";
import { supabase } from "../../../common/utils/supabase";

export const authService = {

  login: async (email: string, password: string): Promise<AuthResponse> => {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

  logout: async (): Promise<{ error: AuthError | null }> => {
    return await supabase.auth.signOut();
  },
  
  updatePassword: async (newPassword: string) => {
    return await supabase.auth.updateUser({
      password: newPassword
    });
  }
};
