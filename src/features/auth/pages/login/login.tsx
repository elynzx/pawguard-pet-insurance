import { LockIcon, EnvelopeIcon, PawPrintIcon, CatIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router"; // Importamos para la navegación
import { useLogin } from "../../hooks/use-login";
import { FormInput } from "../../../../common/components/form-input/form-input";
import LogoWhite from "../../../../assets/logo-white.svg";
import LogoBlack from "../../../../assets/logo-black.svg";
import { InfoIcon } from "@phosphor-icons/react/dist/ssr";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-white">
      
      <div className="hidden lg:flex bg-secondary items-center justify-center p-12 relative overflow-hidden">
        <CatIcon size={140} weight="fill" className="absolute top-10 left-10 text-white/15 -rotate-12" />
        <PawPrintIcon size={200} weight="fill" className="absolute bottom-20 right-10 text-white/10 rotate-12" />

        <div className="z-10 text-white space-y-8 max-w-md text-center">
          {/* Logo clickeable para volver al Home */}
          <button onClick={() => navigate("/")} className="hover:opacity-80 transition-opacity cursor-pointer">
            <img src={LogoWhite} alt="PawGuard Logo" className="w-64 mx-auto mb-4" />
          </button>
          <div className="space-y-4">
            <p className="text-lg font-medium opacity-80 leading-relaxed">
              Ingresa para gestionar la protección de quienes más te quieren.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-20 bg-gray-50/30">
        <div className="w-full max-w-md space-y-5">
          
          <header className="text-center space-y-12">
        
            <button onClick={() => navigate("/")} className="lg:hidden mx-auto cursor-pointer">
              <img src={LogoBlack} alt="PawGuard" className="w-40" />
            </button>

            <div className="space-y-2">
              <h2 className="text-4xl font-heading font-black text-primary">Iniciar Sesión</h2>
              <p className="text-primary/60 font-bold uppercase tracking-widest text-xs">
                Acceso exclusivo para miembros
              </p>
            </div>

            <div className="bg-tertiary/10 p-5 rounded-2xl border border-tertiary/20 flex items-start gap-4 text-left">
              <div className="bg-tertiary p-2 rounded-xl">
                <InfoIcon size={20} weight="fill" className="text-white" />
              </div>
              <p className="text-sm font-bold text-primary leading-snug">
                ¿Es tu primer ingreso? <br />
                <span className="text-primary/60 font-medium">Usa tu número de DNI como contraseña temporal.</span>
              </p>
            </div>
          </header>

          <form onSubmit={handleLogin} className="bg-white px-10 py-12 rounded-2xl shadow-2xl shadow-blue-900/5 border-2 border-gray-100 space-y-8">
            <div className="space-y-5">
              <FormInput
                label="Correo Electrónico"
                type="email"
                placeholder="nombre@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<EnvelopeIcon size={22} weight="bold" />}
                required
              />

              <FormInput
                label="Contraseña"
                type="password"
                placeholder="Ingresa tu clave"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<LockIcon size={22} weight="bold" />}
                required
              />
            </div>

            <div className="space-y-4 pt-2">
              {error && (
                <p className="text-red-500 text-center text-sm font-semibold">* {error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-base bg-tertiary py-5 rounded-full text-lg hover:brightness-105  disabled:opacity-50"
              >
                {loading ? "Verificando..." : "Ingresar al Portal"}
              </button>
            </div>
          </form>

          <button 
            onClick={() => navigate("/")}
            className="flex items-center justify-center mt-12 gap-2 w-full text-primary/50 hover:text-secondary transition-colors font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeftIcon size={14} weight="bold" />
            Volver al inicio
          </button>
        </div>
      </div>
    </main>
  );
}
