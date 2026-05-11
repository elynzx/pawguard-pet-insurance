import { StepPayment } from "../components/step-payment";
import { StepPlan } from "../components/step-plan";
import { StepUserForm } from "../components/step-user-form";
import { Stepper } from "../components/stepper";
import { useCheckout } from "../hooks/use-checkout";

export function CheckoutPage() {
  const { step, nextStep, prevStep, goToStep } = useCheckout(); 

  return (
    <main className="min-h-screen bg-gray-50/50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <Stepper currentStep={step} />

        <div className="mt-10">
          {step === 1 && (
            <StepUserForm onNext={nextStep} />
          )}

          {step === 2 && (
            <StepPlan onNext={nextStep} onBack={prevStep} />
          )}

          {step === 3 && (
            <StepPayment
              onBack={prevStep}
              onEditProfile={() => goToStep(1)}
            />
          )}
          
          {step === 4 && (
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-4xl font-black text-primary">¡Bienvenido a la familia!</h2>
              <p className="text-gray-500">Tu mascota ya está protegida. Revisa tu perfil.</p>
              <button onClick={() => window.location.href = "/profile"} className="btn-base bg-secondary text-white px-8">
                Ir a mi Perfil
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
