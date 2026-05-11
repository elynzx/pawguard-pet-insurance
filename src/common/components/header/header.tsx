import { Link, useNavigate, useLocation } from "react-router"
import Logo from "../../../assets/logo-black.svg"
import { UserIcon, ListIcon, SignOutIcon } from "@phosphor-icons/react"
import { useState } from "react"
import { useUser } from "../../providers/useUser"
import { useAppStore } from "../../../common/store/use-app-store"
import { useLogout } from "../../../features/auth/hooks/use-logout";

const navigationItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Planes", id: "planes" },
  { label: "Beneficios", id: "beneficios" },
  { label: "Veterinarias", to: "/veterinarias" },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useUser();
  const { ownerData } = useAppStore();
  const { handleLogout, loading } = useLogout();

  const isProfile = location.pathname === "/profile";
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) setIsOpen(false);
  };


  const displayName = ownerData.first_name || user?.user_metadata?.first_name || user?.email?.split("@")[0] || "Usuario";

  const initials = displayName.charAt(0).toUpperCase();

  return (
    <header className="w-full h-16 md:h-20 bg-secondary-light flex justify-center items-center sticky top-0 z-50">
      <div className="md:max-w-432 px-4 md:px-30 flex items-center justify-between w-full">

        <button onClick={() => isProfile ? navigate("/") : handleScroll("inicio")} className="cursor-pointer">
          <img src={Logo} alt="PawGuard Logo" className="w-30 md:w-40" />
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {!isProfile && (
            <nav className="flex gap-3">
              {navigationItems.map((item) => (
                item.to ? (
                  <Link key={item.label} to={item.to} className="font-bold hover:bg-white px-4 py-2 rounded-full transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <button key={item.label} onClick={() => handleScroll(item.id!)} className="font-bold hover:bg-white px-4 py-2 rounded-full transition-colors cursor-pointer">
                    {item.label}
                  </button>
                )
              ))}
            </nav>
          )}

          {user ? (
            <div className="flex items-center gap-10 animate-fade-in">
              <Link to="/profile" className="flex items-center gap-2 group">

                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                  {initials}
                </div>

                <span className="font-bold text-primary text-sm border-b-2 border-transparent group-hover:border-secondary transition-all">
                  Hola, {displayName}
                </span>
              </Link>

              <button onClick={handleLogout} disabled={loading} className="btn-base bg-tertiary hover:brightness-105 transition-all">
                {loading ? "Saliendo..." : "Cerrar Sesión"}
              </button>
            </div>
          ) : (
            <button onClick={() => navigate("/login")} className="btn-base bg-tertiary hover:brightness-105 transition-all">
              Iniciar Sesión
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center justify-center gap-3 px-5">
          {user ? (
            <Link to="/profile" className="text-secondary font-black italic text-xs">MI PERFIL</Link>
          ) : (
            <Link to="/login" className="text-primary"><UserIcon size={28} weight="bold" /></Link>
          )}
          <button onClick={toggleMenu} className="text-primary p-2">
            <ListIcon size={28} weight="bold" />
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-secondary-light flex flex-col items-center h-[calc(100vh-64px)] shadow-2xl z-50 animate-in slide-in-from-top-2">
            <nav className="flex flex-col items-center w-full">
              {!isProfile && navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => item.to ? navigate(item.to) : handleScroll(item.id!)}
                  className="text-center w-full py-8 border-b border-b-blue-200 font-bold hover:bg-white transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              {user && (
                <button onClick={handleLogout} className="text-center w-full py-8 text-red-500 font-bold hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
                  <SignOutIcon size={22} /> Cerrar Sesión
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header >
  )
}
