import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PetRow, PlanRow, ProfileRow } from "../types/type-props";

interface AppState {
    petData: Partial<PetRow>;
    ownerData: Partial<ProfileRow>;
    selectedPlan: PlanRow | null;
    setPetData: (data: Partial<PetRow>) => void;
    setOwnerData: (data: Partial<ProfileRow>) => void;
    setSelectedPlan: (plan: PlanRow | null) => void;
    resetAppStore: () => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            petData: { id: undefined, name: "", species: "", breed: "", age: "", gender: "", is_companion_animal: false },
            ownerData: { id: undefined, first_name: "", last_name: "", dni: "", phone: "", email: "", address: "", district_id: "" },
            selectedPlan: null,

            setPetData: (petData) => set((state) => ({
                petData: { ...state.petData, ...petData }
            })),

            setOwnerData: (ownerData) => set((state) => ({
                ownerData: { ...state.ownerData, ...ownerData }
            })),

            setSelectedPlan: (plan) => set({
                selectedPlan: plan
            }),

            resetAppStore: () => set({
                petData: { id: undefined, name: "", species: "", breed: "", age: "", gender: "", is_companion_animal: false },
                ownerData: { id: undefined, first_name: "", last_name: "", dni: "", phone: "", email: "", address: "", district_id: "" },
                selectedPlan: null,
            }),
        }),
        {
            name: "pawguard-app-storage",
        }
    )
);
