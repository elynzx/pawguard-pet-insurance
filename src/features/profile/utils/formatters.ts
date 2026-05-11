export function getInitials(name: string): string {
  if (!name) return "??";
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();
}

export const formatFullName = (firstName?: string, lastName?: string) => {
  return `${firstName || ""} ${lastName || ""}`.trim() || "Usuario";
};

export const getDistrictName = (districts: any[], districtId?: string) => {
  return districts.find(d => d.id === districtId)?.name || "No especificado";
};

export const SPECIES_MAP: Record<string, string> = {
  dog: "Perro",
  cat: "Gato",
};

export const formatSpecies = (species: string): string => {
  return SPECIES_MAP[species.toLowerCase()] || species;
};
