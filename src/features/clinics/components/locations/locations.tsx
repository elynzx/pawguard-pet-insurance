// features/clinics/components/StoreLocations.tsx
import { Marker, Popup } from "react-leaflet";
import { CLINICS } from "../../data/clinics-data";
import { leafIcon } from "../../../../assets/icons/leaf-icon";

export const Locations = () => {
  return (
    <>
      {CLINICS.map((clinic) => (
        <Marker 
          key={clinic.id} 
          position={[clinic.lat, clinic.lng]} 
          icon={leafIcon}
        >
          <Popup>
            <div className="text-center py-2 px-3">
              <h2 className="font-black text-secondary text-lg font-heading">{clinic.name}</h2>
              <p className="font-primary font-semibold text-primary">{clinic.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};
