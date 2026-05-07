import {type Plan} from "../types/plan"

export const PLANS : Plan[] = [
  {
    name: "Esencial",
    price: "24.90",
    description: "Tranquilidad inmediata ante accidentes en casa o paseos.",
    features: ["Atención por accidentes", "Consultas de emergencia", "Red de clínicas en Lima", "Asistencia telefónica"],
    buttonLabel: "Elegir Esencial"
  },
  {
    name: "Plus",
    price: "34.90",
    description: "El balance ideal para la salud preventiva de tu mascota.",
    features: ["Todo lo del plan Esencial", "Tele-vet 24/7 ilimitada", "1 Chequeo preventivo anual", "Descuento en farmacias"],
    recommended: true,
    buttonLabel: "Obtener Plus"
  },
  {
    name: "Premium",
    price: "44.90",
    description: "Cobertura completa para una vida larga y saludable.",
    features: ["Todo lo del plan Plus", "Vacunas anuales (Triple/Rabia)", "Desparasitación interna", "Limpieza de oídos y corte"],
    buttonLabel: "Pasar a Premium"
  },
];