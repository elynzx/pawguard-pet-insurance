import { FooterWaves } from "../ui/footer-wave";
import Dog1 from "../../../assets/footer/footer-dog.svg";
import Book from "../../../assets/footer/complaints-book.svg";
import Logo from "../../../assets/logo-black.svg";
import { 
  FacebookLogoIcon, 
  InstagramLogoIcon, 
  WhatsappLogoIcon, 
  TiktokLogoIcon, 
  EnvelopeSimpleIcon,
  PhoneCallIcon,
  DeviceMobileIcon
} from "@phosphor-icons/react";

export function Footer() {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-linear-to-b from-secondary-light via-secondary-light to-secondary pt-10 mt-70">

      <div className="absolute bottom-full left-0 w-full -mb-px">
        <FooterWaves />
      </div>

      <div className="absolute -top-52 md:-top-64 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 z-10">
        <img 
          src={Dog1} 
          alt="Mascota feliz"
          className="h-60 md:h-80 drop-shadow-2xl animate-bounce-slow object-contain" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/40 pb-12 items-center text-center md:items-start md:text-left">

          <div className="col-span-1 md:col-span-2 space-y-6 flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="h-10" />
            <p className="text-primary max-w-sm font-semibold text-lg leading-snug">
              Cuidamos a los que siempre te esperan con el corazón.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: InstagramLogoIcon, href: "#" },
                { Icon: FacebookLogoIcon, href: "#" },
                { Icon: WhatsappLogoIcon, href: "#" },
                { Icon: TiktokLogoIcon, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-secondary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <social.Icon size={24} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black text-primary mb-6 tracking-tight uppercase text-sm">Soporte</h4>
            <ul className="space-y-4 text-primary font-bold text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Beneficios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Libro de reclamaciones</a></li>
            </ul>
            <img src={Book} alt="Libro de reclamaciones" className="mt-6 h-12 grayscale hover:grayscale-0 transition-all cursor-pointer" />
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-black text-primary mb-6 tracking-tight uppercase text-sm">Contáctanos</h4>
            <ul className="space-y-4 text-primary font-bold text-sm">
              <li className="flex items-center gap-3">
                <PhoneCallIcon size={20} weight="bold" />
                <span>Lima: (01) 213-3333</span>
              </li>
              <li className="flex items-center gap-3">
                <DeviceMobileIcon size={20} weight="bold" />
                <span>WhatsApp: 999 999 999</span>
              </li>
              <li className="flex items-center gap-3 group">
                <EnvelopeSimpleIcon size={20} weight="bold" />
                <a href="mailto:hola@pawguard.pe" className="group-hover:text-white transition-colors underline decoration-white/20">
                  hola@pawguard.pe
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex py-8 justify-center items-center text-xs md:text-sm text-white font-bold">
          <p>© {fullYear} Pawguard Lima. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
