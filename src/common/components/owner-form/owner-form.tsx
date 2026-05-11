import { FormInput } from "../form-input/form-input";
import { FormSelect } from "../form-select/form-select";
import { useDistricts } from "../../hooks/use-districts";
import { useAppStore } from "../../store/use-app-store";

export const OwnerForm = ({ isReadOnlyEmail = false }) => {
  const { districts } = useDistricts();
  const { ownerData, setOwnerData } = useAppStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
      <FormInput label="Nombres" value={ownerData.first_name ?? ""} onChange={(e) => setOwnerData({ first_name: e.target.value })} required />
      <FormInput label="Apellidos" value={ownerData.last_name ?? ""} onChange={(e) => setOwnerData({ last_name: e.target.value })} required />
      <FormInput label="DNI" value={ownerData.dni ?? ""} onChange={(e) => setOwnerData({ dni: e.target.value })} maxLength={8} required />
      <FormInput label="Celular" value={ownerData.phone ?? ""} onChange={(e) => setOwnerData({ phone: e.target.value })} maxLength={9} required />

      <div className="md:col-span-2">
        <FormInput
          label="Email"
          value={ownerData.email ?? ""}
          onChange={(e) => setOwnerData({ email: e.target.value })}
          readOnly={isReadOnlyEmail}
          className={isReadOnlyEmail ? "bg-gray-50 opacity-70" : ""}
          required
        />
      </div>

      <FormSelect label="Distrito" value={ownerData.district_id ?? ""} onChange={(val) => setOwnerData({ district_id: val })} options={districts.map(d => ({ value: d.id, label: d.name }))} />
      <FormInput label="Dirección" value={ownerData.address ?? ""} onChange={(e) => setOwnerData({ address: e.target.value })} required />
    </div>
  );
};
