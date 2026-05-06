import { type IconProps, ClockIcon, CurrencyCircleDollarIcon, ShieldCheckIcon } from "@phosphor-icons/react";

interface ValueProp {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType<IconProps>;
  color: string;
}

const VALUE_PROPS: ValueProp[] = [
  { id: 1, title: "+10k Mascotas", description: "Protegidas en Lima", icon: ShieldCheckIcon, color: "blue" },
  { id: 2, title: "Tele-vet 24/7", description: "Consultas sin costo", icon: ClockIcon, color: "purple" },
  { id: 3, title: "Reembolsos", description: "En solo 5 días", icon: CurrencyCircleDollarIcon, color: "emerald" },
];

export const ValueProps = () => {
  return (
    <section className="w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6 -mt-12 relative z-30">
      {VALUE_PROPS.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="group relative bg-white p-1 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shadow-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-5 p-5 bg-white rounded-[22px]">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} weight="duotone" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-black text-primary text-lg leading-tight tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm font-medium text-gray-400 mt-0.5">
                  {item.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-secondary group-hover:w-1/2 transition-all duration-300 rounded-full" />
            </div>
          </div>
        );
      })}
    </section>
  );
};
