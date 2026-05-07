export interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
    showBadge?: boolean;
    buttonLabel: string;
    onClick?: ()=> void;
    isSelected?: boolean;
}