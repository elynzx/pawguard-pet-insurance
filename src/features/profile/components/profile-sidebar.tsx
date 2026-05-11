import { PencilSimpleIcon } from "@phosphor-icons/react";
import { getInitials } from "../utils/formatters";

interface Props {
  name: string;
  dni: string;
  email: string;
  district: string;
  onEdit: () => void;
}

export const ProfileSidebar = ({
  name,
  dni,
  email,
  district,
  onEdit
}: Props) => {

  const userInitials = getInitials(name);

  const profileDetails = [
    { label: "DNI", value: dni },
    { label: "Email", value: email },
    { label: "Distrito", value: district },
  ];

  return (
    <aside className="md:col-span-1 py-2">
      <div className="bg-white p-8 rounded-2xl border-2 border-gray-100 relative group shadow-md">
        <button
          onClick={onEdit}
          className="absolute top-6 right-6 p-2 text-secondary hover:bg-secondary/10 rounded-full transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <PencilSimpleIcon size={20} weight="bold" />
        </button>

        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 bg-secondary-light text-secondary rounded-full flex items-center justify-center text-3xl font-black">
            {userInitials}
          </div>
          <div>
            <h3 className="text-xl font-heading font-black text-primary">{name}</h3>
            <p className="text-primary/40  font-medium text-sm">Titular de Cuenta</p>
          </div>
        </div>

        <div className="mt-8 space-y-4 border-t border-gray-200 pt-6">
          {profileDetails.map((item) => (
            <div key={item.label} className="flex justify-between text-sm  ">
              <span className="text-primary/40 font-bold">{item.label}</span>
              <span className="text-primary font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
