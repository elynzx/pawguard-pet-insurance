import { useState, useEffect } from "react";
import { useDistrictStore } from "../store/use-district-store";
import { getDistricts } from "../services/get-districts";

export function useDistricts() {
  const [loading, setLoading] = useState(false);
  const { districts, setDistricts } = useDistrictStore();

  useEffect(() => {
    if (districts.length > 0)
      return;

    setLoading(true);
    getDistricts()
      .then((districtData) => setDistricts(districtData))
      .finally(() => setLoading(false));
  }, [districts.length, setDistricts]);

  return { districts, loading };
}
