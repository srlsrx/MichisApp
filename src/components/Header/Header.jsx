/**
 * Componente Header que incluye un botón de menú responsive para abrir/cerrar el Sidebar.
 * 
 * Este componente muestra una barra de navegación superior con un logo, enlaces de navegación estilizados y un botón de menú
 * para dispositivos móviles y tabletas. Los enlaces se adaptan a la ruta actual para evitar anidamientos incorrectos.
 * 
 * @module Header
 * @author Ángel
 */

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '/images/paws&claws-logo.png';

/**
 * Componente Header que muestra una barra de navegación estilizada y controla la visibilidad del Sidebar.
 * 
 * @function Header
 * @returns {JSX.Element} El componente Header renderizado.
 */
function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-500 to-green-500 shadow-md w-full border-b border-gray-300">
        
        <div className="flex items-center gap-2">
          <img src={logo} alt="Paws & Claws" className="h-16 w-auto" />
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            to="/"
            className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white hover:text-teal-500 ${
              location.pathname === '/' ? 'bg-white text-teal-500 font-bold' : 'text-white'
            }`}
          >
            <i className="bi bi-house-door-fill"></i> Home
          </Link>
          <Link
            to="/adopt"
            className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white hover:text-teal-500 ${
              location.pathname === '/adopt' ? 'bg-white text-teal-500 font-bold' : 'text-white'
            }`}
          >
            <i className="bi bi-heart-fill"></i> Adopta
          </Link>
        </nav>

        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <i className="bi bi-list"></i>
        </button>
      </header>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
    </>
  );
}

export default Header;
