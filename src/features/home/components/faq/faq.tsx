import { CaretDownIcon } from "@phosphor-icons/react"
import { FaqBlob } from "../../../../common/components/ui/faq-blob";
import FaqImagen from "../../../../assets/faq.svg"

export const FAQ_DATA = [
  { q: "¿Hay un periodo de carencia?", a: "Sí, existe un periodo de 30 días para enfermedades comunes. Sin embargo, para accidentes la cobertura es inmediata tras la validación de tu plan." },
  { q: "¿Puedo ir a cualquier veterinaria?", a: "Totalmente. Funcionamos mediante reembolso, lo que te da la libertad de ir a tu veterinaria de confianza o a la más cercana en caso de emergencia en todo Lima." },
  { q: "¿Hasta qué edad puedo asegurar a mi mascota?", a: "Recibimos mascotas desde los 5 meses hasta los 10 años y 11 meses. Una vez asegurados, pueden permanecer en el plan de por vida." },
  { q: "¿Cómo solicito un reembolso?", a: "Es muy simple: desde nuestra App subes la foto de la factura y el informe médico. El dinero se depositará en tu cuenta en un máximo de 5 días hábiles." },
  { q: "¿Qué sucede en caso de una emergencia nocturna?", a: "Tienes acceso a tele-veterinaria 24/7 para triaje inmediato. Si se requiere atención física, puedes acudir a cualquier clínica de urgencias y aplicar el reembolso." },
  { q: "¿El seguro cubre vacunas y desparasitación?", a: "Sí, nuestros planes Plus y Premium incluyen cobertura para el esquema de vacunación anual y refuerzos preventivos." },
  { q: "¿Puedo cancelar mi plan en cualquier momento?", a: "Sí, no tenemos contratos de permanencia forzosa. Puedes solicitar la baja de tu seguro cuando lo desees sin penalizaciones." }
];

export const Faq = () => {
  return (
    <section className="w-full md:px-10 flex flex-col md:flex-row items-start justify-center md:justify-between gap-18 py-12">

      <div className="w-3xl relative z-10 order-2 lg:order-1 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-2 font-heading text-c-dark-gray">Preguntas Frecuentes</h2>
        <p className="text-c-blue font-semibold mb-8 text-lg">Todo lo que necesitas saber sobre PawGuard</p>
        <div className="w-full space-y-2 overflow-y-auto pr-4 scrollbar-hide">
          {FAQ_DATA.map((faq) => (
            <details key={faq.q} className="w-full group border-b border-c-light-blue pb-4 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none py-3">
                <span className="font-bold text-lg text-c-dark-gray group-hover:text-c-blue transition-colors leading-tight">
                  {faq.q}
                </span>
                <CaretDownIcon size={20} className="group-open:rotate-180 transition-transform text-c-blue" />
              </summary>
              <p className="mt-2 text-c-dark-gray/80 leading-relaxed text-sm animate-fade-down">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-30 order-1 lg:order-2">
        <div className="relative z-10 w-full max-w-sm lg:max-w-md drop-shadow-2xl">
          <img
            src={FaqImagen}
            alt="Mascotas felices"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <FaqBlob />
        </div>
      </div>
    </section>
  )
}
