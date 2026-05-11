import {
  DogIcon,
  CatIcon,
  GenderFemaleIcon,
  GenderMaleIcon,
} from "@phosphor-icons/react";
import { FormInput } from "../form-input/form-input";
import { FormSelect } from "../form-select/form-select";
import { useAppStore } from "../../store/use-app-store";

export const PetForm = () => {
  const { petData, setPetData } = useAppStore();

  const ageOptions = [
    ...Array.from({ length: 9 }, (_, i) => ({
      value: `${i + 3} meses`,
      label: `${i + 3} meses`,
    })),
    ...Array.from({ length: 11 }, (_, i) => ({
      value: `${i + 1} ${i + 1 === 1 ? "año" : "años"}`,
      label: `${i + 1} ${i + 1 === 1 ? "año" : "años"}`,
    })),
  ];

  return (
    <div className="w-full space-y-4 grow">
      <FormInput
        label="Nombre"
        value={petData.name ?? ""}
        onChange={(e) => setPetData({ name: e.target.value })}
        placeholder="Ej. Bobby"
        required
      />
      <FormSelect
        label="Tipo"
        value={petData.species ?? ""}
        onChange={(val) => setPetData({ species: val })}
        options={[
          { value: "dog", label: "Perro", Icon: DogIcon },
          { value: "cat", label: "Gato", Icon: CatIcon },
        ]}
      />
      <FormInput
        label="Raza"
        value={petData.breed ?? ""}
        onChange={(e) => setPetData({ breed: e.target.value })}
        placeholder="Ej. Shitzu"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          label="Edad"
          value={petData.age ?? ""}
          onChange={(val) => setPetData({ age: val })}
          options={ageOptions}
        />
        <FormSelect
          label="Sexo"
          value={petData.gender ?? ""}
          onChange={(val) => setPetData({ gender: val })}
          options={[
            { value: "male", label: "Macho", Icon: GenderMaleIcon },
            {
              value: "female",
              label: "Hembra",
              Icon: GenderFemaleIcon,
            },
          ]}
        />
      </div>
    </div>
  );
};
