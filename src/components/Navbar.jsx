import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/img/logo.png"; // Ajusta la ruta si tu logo está en otra carpeta
import { navItems } from "../constants";   // Asegúrate que navItems esté exportado correctamente

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50  backdrop-blur-lg border-b border-blue-400/40 bg-blue-900/70">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-18 w-18 mr-3 object-contain" src={logo} alt="Logo" />
            <div className="flex flex-col">
              <span className="text-white text-2xl font-bold tracking-wide leading-none">FISCALIZATE!</span>
              <span className="text-blue-200 text-sm leading-tight">DE SANDOVAL & CO.</span>
            </div>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white hover:text-blue-400 transition font-semibold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X className="text-blue-200 w-8 h-8" /> : <Menu className="text-blue-200 w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Animated dropdown menu */}
        <div
          className={`mt-0
            absolute top-full left-0 w-full z-40
            flex flex-col items-center
            transition-all duration-300 ease-in-out
            ${mobileDrawerOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-8 pointer-events-none'
            }
            bg-blue-900/80 border-t-2 border-b-2 border-blue-400/60 shadow-xl rounded-b-xl
            backdrop-blur-xl
            overflow-hidden
          `}
        >
          {/* Fondo extra para igualar el desenfoque */}
          <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-xl -z-10 rounded-b-xl"></div>
          <ul className="flex flex-col items-center py-8 space-y-7 w-full relative z-10">
            {navItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={item.href}
                  className="text-white text-lg hover:text-blue-300 transition font-medium"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;