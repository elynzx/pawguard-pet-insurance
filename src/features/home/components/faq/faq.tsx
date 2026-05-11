import { CaretDownIcon } from "@phosphor-icons/react"
import { FaqBlob } from "../../../../common/components/ui/faq-blob";
import FaqImagen from "../../../../assets/faq.svg"

export const FAQ_DATA = [
  {
    q: "¿Hay un periodo de carencia?",
    a: "Sí, existe un periodo de 30 días para enfermedades comunes. Sin embargo, para accidentes la cobertura es inmediata tras la activación de tu plan."
  },
  {
    q: "¿Puedo ir a cualquier veterinaria?",
    a: "Sí, tienes libertad total. En nuestra Red Afiliada (ver mapa en la web) el proceso es directo y no pagas nada. En cualquier otra veterinaria de tu elección, pagas la consulta y luego solicitas tu reembolso."
  },
  {
    q: "¿Hasta qué edad puedo asegurar a mi mascota?",
    a: "Aseguramos mascotas desde los 5 meses hasta los 11 años. Una vez protegidos, pueden permanecer en el plan de por vida."
  },
  {
    q: "¿Cómo solicito un reembolso?",
    a: "Envía una foto de la factura y el informe médico a reembolsos@pawguard.com. Nuestro equipo validará la información y depositará el dinero en tu cuenta en un máximo de 5 días hábiles."
  },
  {
    q: "¿Qué sucede en caso de una emergencia nocturna?",
    a: "Tienes acceso a orientación veterinaria 24/7 vía WhatsApp. Si tu mascota requiere atención física inmediata, puedes acudir a cualquier clínica de urgencias y gestionar el reembolso por correo."
  },
  {
    q: "¿El seguro cubre vacunas y desparasitación?",
    a: "Sí, los planes Plus y Premium incluyen el esquema de vacunación anual y refuerzos preventivos siempre que se realicen en nuestras sedes afiliadas."
  },
  {
    q: "¿Puedo cancelar mi plan en cualquier momento?",
    a: "Sí, no tenemos contratos de permanencia. Puedes solicitar la baja de tu seguro enviando un correo a soporte@pawguard.com desde tu cuenta registrada."
  }
];


export const Faq = () => {
  return (
    <section className="w-full md:max-w-432 px-4 md:px-30  flex flex-col md:flex-row items-center md:items-start md:justify-between md:gap-1 h-320 md:h-180">
      <div className="md:w-3xl relative z-10 order-2 lg:order-1 flex flex-col items-center">
        <h2 className="text-4xl font-black mb-6 font-heading text-primary">Preguntas Frecuentes</h2>
        <p className="text-secondary font-semibold mb-8 md:mb-12 text-xl text-center md:text-start">Todo lo que necesitas saber sobre PawGuard</p>
        <div className="w-full space-y-2 overflow-y-auto md:pr-4 scrollbar-hide px-5 md:px-0">
          {FAQ_DATA.map((faq) => (
            <details key={faq.q} className="w-full group border-b border-secondary-light pb-4 transition-all">
              <summary className="flex justify-between items-center cursor-pointer list-none py-3">
                <span className="font-bold text-lg text-primary group-hover:text-secondary transition-colors leading-tight">
                  {faq.q}
                </span>
                <CaretDownIcon size={20} className="group-open:rotate-180 transition-transform text-secondary" />
              </summary>
              <p className="mt-2 text-primary/80 leading-relaxed text-sm animate-fade-down">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center mt-30 order-1 lg:order-2 mb-25 md:mb-0">
        <div className="relative z-10 w-full max-w-sm md:max-w-md drop-shadow-2xl">
          <img
            src={FaqImagen}
            alt="Perro pequeño descansando"
            className="w-80 md:w-full h-auto object-contain"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <FaqBlob />
        </div>
      </div>
    </section>
  )
}
