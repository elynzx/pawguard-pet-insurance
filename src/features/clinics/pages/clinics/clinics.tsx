import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { CLINICS } from "../../data/clinics-data";
import { Locations } from "../../components/locations/locations";
import { MapPinIcon,  PhoneIcon, ShieldCheckIcon } from "@phosphor-icons/react";

export function ClinicsPage() {
  const LIMA_COORDS: [number, number] = [-12.046374, -77.042793];

  return (
    <main className="min-h-screen py-12 px-6 mt-12 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-8">

        <header className="space-y-2">
          <h1 className="text-4xl font-heading font-black text-primary">Nuestras Sedes</h1>
          <p className="text-primary/60 font-semibold">
            Atención preferencial en nuestra red afiliada
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">

          <section className="space-y-4 max-h-150 overflow-y-auto pr-2">
            {CLINICS.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-white p-6 rounded-2xl border-2 border-primary/5 hover:border-secondary/50 transition-all cursor-pointer group shadow-md"
              >
                <h3 className="font-black text-primary group-hover:text-secondary text-lg transition-colors">
                  {clinic.name}
                </h3>
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-gray-400 flex items-center gap-2">
                    <MapPinIcon size={18} weight="fill" className="text-secondary/40" />
                    {clinic.address}
                  </p>
                  <p className="text-sm text-secondary font-bold flex items-center gap-2">
                    <PhoneIcon size={18} weight="fill" />
                    Atención 24/7
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-secondary p-6 rounded-2xl text-white space-y-3 flex gap-3">
              <ShieldCheckIcon size={32} weight="fill" className="text-white" />
              <p className="text-sm font-bold text-white">
                ¿Tu veterinaria no está en la lista? No te preocupes, aplica el reembolso enviando tu boleta por correo.
              </p>
            </div>
          </section>

          <section className="md:col-span-2 h-150 rounded-2xl overflow-hidden border-2 border-primary/10 shadow-xl relative">
            <MapContainer
              center={LIMA_COORDS}
              zoom={13}
              className="h-full w-full z-0"
              zoomControl={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Locations />
            </MapContainer>

            <div className="absolute bottom-6 right-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-gray-100 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-xs font-black text-primary">Red en tiempo real</span>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
