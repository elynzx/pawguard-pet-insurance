import { useState } from "react";
import { useAppStore } from "../../../common/store/use-app-store";
import { checkoutService } from "../services/checkout-service";
import { authService } from "../../auth/services/auth-service";

export function useCheckout() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { petData, ownerData, selectedPlan, resetAppStore } = useAppStore();
  const { signUp, createProfile, createPet, createSubscription } = checkoutService;

  const nextStep = () => setStep((stepIndex) => stepIndex + 1);
  const prevStep = () => setStep((stepIndex) => stepIndex - 1);

  const saveCheckout = () => {
    if (!ownerData.email || !ownerData.dni || !selectedPlan) {
      setError("Todos los datos son obligatorios");
      return;
    }

    setLoading(true);
    setError(null);

    signUp(ownerData.email, ownerData.dni)
      .then((userId) => {
        if (!userId) throw new Error("No se pudo crear el  usuario");
        return createProfile(userId, ownerData).then(() => userId);
      })
      .then((userId) => createPet(userId, petData))
      .then((petCreated) =>
        createSubscription(petCreated.id, selectedPlan.id),
      )
      .then(() => authService.logout())
      .then(() => {
        resetAppStore();
        nextStep();
      })
      .catch((error) => {
        setError(error.message || "Ocurrió un error en el registro");
      })
      .finally(() => setLoading(false));
  };

  return {
    step,
    nextStep,
    prevStep,
    goToStep: setStep,
    saveCheckout,
    loading,
    error,
  };
}
