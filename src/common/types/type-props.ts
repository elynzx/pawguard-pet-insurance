import type {Database} from "../../types/database.types"

export type PlanRow = Database['public']['Tables']['plans']['Row']
export type ProfileRow = Database['public']['Tables']['profiles']['Row']
export type PetRow = Database['public']['Tables']['pets']['Row']
export type DistrictRow = Database['public']['Tables']['districts']['Row']

export interface PlanProps extends PlanRow {
    showBadge?: boolean;
    buttonLabel: string;
    onClick?: ()=> void;
    isSelected?: boolean;
}

export interface ProfileProps extends ProfileRow {

}

export interface PetProps extends ProfileRow {
    
}