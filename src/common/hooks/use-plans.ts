import { useEffect, useState } from "react";
import { usePlanStore } from "../store/use-plan-store";
import { getPlans } from "../services/get-plans";

export const useGetPlans = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { plans, setPlans } = usePlanStore()

    useEffect(() => {
        setLoading(true);
        setError(null);
        if (plans.length > 0) {
            setLoading(false);
            return;
        }

        getPlans()
            .then((plansData) => {
                setPlans(plansData);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
            .finally(() => setLoading(false));
    }, [plans.length, setPlans]);

    return { plans, loading, error };
};
