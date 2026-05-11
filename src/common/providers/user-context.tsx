import { createContext, useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        updateUserState(session?.user ?? null);
      });
    };

    const listenAuthChanges = () => {
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        updateUserState(session?.user ?? null);
      });
      return authListener;
    };

    const updateUserState = (newUser: User | null) => {
      setUser(newUser);
      setLoading(false);
    };

    initializeAuth();
    const { subscription } = listenAuthChanges();

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

