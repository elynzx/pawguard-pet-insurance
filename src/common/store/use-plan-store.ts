import { create } from "zustand";
import type { PlanRow } from "../types/type-props";

interface PlanState {
    plans: PlanRow[];
    setPlans: (plans: PlanRow[]) => void;
}

export const usePlanStore = create<PlanState>((set) => ({
    plans: [],
    setPlans: (plans) => set({ plans }),
}));
