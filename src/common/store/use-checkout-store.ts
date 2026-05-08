import { create } from "zustand";
import type { PlanRow } from "../types/type-props";

interface CheckoutState {
    selectedPlan: PlanRow | null;
    setSelectedPlan: (Plan: PlanRow) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    selectedPlan: null,
    setSelectedPlan: (selectedPlan) => set({ selectedPlan }),
}));
