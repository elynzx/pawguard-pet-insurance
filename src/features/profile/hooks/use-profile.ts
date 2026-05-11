import { useEffect, useState } from "react";
import { useAppStore } from "../../../common/store/use-app-store";
import { useUser } from "../../../common/providers/useUser";
import { getFullProfile } from "../service/get-profile";

export function useProfile() {
  const { user } = useUser();
  const { setOwnerData, setPetData, setSelectedPlan } = useAppStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getFullProfile(user.id)
      .then(({ profile, pet, plan }) => {
        if (profile) setOwnerData(profile);
        if (pet) setPetData(pet);
        if (plan) setSelectedPlan(plan);
      })
      .catch((error) => setError(error.message || "Error al obtener el perfil"))
      .finally(() => setLoading(false))

  }, [user, setOwnerData, setPetData, setSelectedPlan]);

  return { loading, error };
}
