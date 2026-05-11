import { useEffect } from "react";
import { AlertModal } from "../../../common/components/alert-modal/alert-modal";
import { StepPayment } from "../components/step-payment";
import { StepPlan } from "../components/step-plan";
import { StepUserForm } from "../components/step-user-form";
import { Stepper } from "../components/stepper";
import { useCheckout } from "../hooks/use-checkout";

export function CheckoutPage() {
  const checkout = useCheckout();

  const handleFinish = () => {
    window.location.href = "/login";
  };

    useEffect(() => {
    if (checkout.step === 4) {
      const timer = setTimeout(() => {
        window.location.href = "/";
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [checkout.step]);

  return (
    <main className="min-h-screen bg-gray-50/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Stepper currentStep={checkout.step} />

        <div className="mt-10">
          {checkout.step === 1 && (
            <StepUserForm onNext={checkout.nextStep} />
          )}

          {checkout.step === 2 && (
            <StepPlan onNext={checkout.nextStep} onBack={checkout.prevStep} />
          )}

          {checkout.step === 3 && (
            <StepPayment
              onBack={checkout.prevStep}
              onEditProfile={() => checkout.goToStep(1)}
              saveCheckout={checkout.saveCheckout}
              loading={checkout.loading}
              error={checkout.error}
            />
          )}

          <AlertModal
            isOpen={checkout.step === 4}
            onClose={handleFinish}
            type="success"
            title="¡Bienvenido a la familia!"
            message="Tu mascota ya está protegida."
            buttonLabel="Ir al Login"
          />
        </div>
      </div>
    </main>
  );
}
