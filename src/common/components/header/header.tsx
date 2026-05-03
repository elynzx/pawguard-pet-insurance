import { Link } from "react-router"
import Logo from "../../../assets/logo-black.svg"
import { UserIcon, ListIcon, XIcon } from "@phosphor-icons/react"
import { useState } from "react"

const navigationItems = [
  { label: "Inicio", to: "/" },
  { label: "Planes", to: "/planes" },
  { label: "Veterinarias", to: "/veterinarias" },
]

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="w-full h-16 md:h-20 bg-c-light-blue flex justify-center items-center sticky top-0 z-50">
      <div className="w-full md:max-w-432 px-4 md:px-30 hidden md:flex items-center justify-between">
        <img src={Logo} alt="PawGuard Logo" className="w-40" />
        <div className="flex gap-8 items-center">
          <nav className="flex gap-3">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="font-bold hover:bg-white px-4 py-2 rounded-full transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="p-2 hover:bg-white rounded-full cursor-pointer transition-colors">
            <UserIcon size={22} weight="bold" />
          </div>
          <button className="btn-base bg-c-yellow hover:brightness-105 transition-all">Iniciar Sesión</button>
        </div>
      </div>

      <div className="flex md:hidden w-full justify-between items-center px-5">
        <img src={Logo} alt="PawGuard Logo" className="w-30" />
        <div className="flex items-center justify-center gap-3">
          <Link to={"/login"}>
            <UserIcon size={28} weight="bold" />
          </Link>
          <button onClick={toggleMenu} className="text-c-dark-gray p-2">
            <ListIcon size={28} weight="bold" />
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 right-0 w-full bg-c-light-blue flex flex-col items-center h-[calc(100vh-64px)] shadow-2xl animate-in fade-in slide-in-from-right-2">
            <nav className="flex flex-col items-center w-full">
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={toggleMenu}
                  className="text-center w-full py-8 border-b border-b-blue-200 font-bold hover:bg-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

    </header>
  )
}