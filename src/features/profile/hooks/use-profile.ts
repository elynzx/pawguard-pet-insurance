import { useEffect, useState } from "react";
import { useAppStore } from "../../../common/store/use-app-store";
import { useUser } from "../../../common/providers/useUser";
import { getFullProfile } from "../service/get-profile";

export function useProfile() {
  const { user } = useUser();
  const { setOwnerData, setPetData } = useAppStore();

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
      .then(({ profile, pet }) => {
        if (profile) setOwnerData(profile);
        if (pet) setPetData(pet);
      })
      .catch((error) => setError(error.message || "Error al obtener el perfil"))
      .finally(() => setLoading(false))

  }, [user, setOwnerData, setPetData]);

  return { loading, error };
}
