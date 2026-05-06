import { type IconProps, FlameIcon, HandHeartIcon, HospitalIcon, PawPrintIcon, ScissorsIcon, FirstAidIcon, PillIcon, SyringeIcon } from "@phosphor-icons/react";
import { IconBlob } from "../../../../common/components/ui/icon-blob";

interface Service {
  name: string;
  icon: React.ElementType<IconProps>;
  discount: string;
}

const SERVICES: Service[] = [
  { name: "Grooming", icon: ScissorsIcon, discount: "15%" },
  { name: "Internamiento", icon: HospitalIcon, discount: "25%" },
  { name: "Farmacia", icon: PillIcon, discount: "18%" },
  { name: "Terapia", icon: HandHeartIcon, discount: "12%" },
  { name: "Especialistas", icon: FirstAidIcon, discount: "15%" },
  { name: "Training", icon: PawPrintIcon, discount: "22%" },
  { name: "Laboratorio", icon: SyringeIcon, discount: "18%" },
  { name: "Cremación", icon: FlameIcon, discount: "18%" },
];

const styles = {
  card: "flex flex-col items-center mx-8 min-w-30 group",
  iconContainer: "relative flex items-center justify-center w-24 h-24 mb-2 transition-transform duration-300 group-hover:-translate-y-2",
  badge: "absolute -top-1 -right-1 bg-tertiary text-primary text-sm font-black px-3 py-1 rounded-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform",
  label: "font-bold text-primary text-center font-heading text-lg"
};

export const Discounts = () => {
  return (
    <section className="w-full py-4 overflow-hidden">
      <div className="flex flex-col items-center mb-10 text-center px-4 gap-3">
        <h2 className="text-4xl font-black text-primary font-heading mt-4">
          Mucho más que un seguro
        </h2>
        <p className="text-gray-500 max-w-md mt-4">
          Accede a beneficios exclusivos en nuestra red de partners.
        </p>
      </div>

      <div className="relative flex overflow-hidden mt-16">
        <div className="absolute inset-y-0 left-0 w-20 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
        <div className="flex animate-marquee py-4 hover:[animation-play-state:paused]">
          {[...SERVICES, ...SERVICES].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={`${item.name}-${index}`} className={styles.card}>
                <div className={styles.iconContainer}>
                  <IconBlob />
                  <div className="relative z-10 text-primary group-hover:text-secondary transition-colors">
                    <Icon size={35} weight="bold" />
                  </div>
                  <div className={styles.badge}>{item.discount}</div>
                </div>
                <span className={styles.label}>{item.name}</span>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
