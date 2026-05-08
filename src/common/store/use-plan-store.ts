import { create } from "zustand";
import type { PlanRow } from "../types/type-props";

interface IPlanStore {
    plans: PlanRow[];
    setPlans: (plans: PlanRow[]) => void;
}

export const usePlanStore = create<IPlanStore>((set) => ({
    plans: [],
    setPlans: (plans) => set({ plans }),
}));
