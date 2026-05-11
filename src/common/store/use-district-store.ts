import { create } from "zustand";
import type { DistrictRow } from "../types/type-props";

interface DistrictState {
    districts: DistrictRow[];
    setDistricts: (districts: DistrictRow[]) => void;
}

export const useDistrictStore = create<DistrictState>((set) => ({
    districts: [],
    setDistricts: (districts) => set({ districts }),
}));
