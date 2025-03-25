/**
 * Componente Sidebar que se desliza para mostrar un menú de navegación.
 * 
 * Este componente muestra un menú lateral que se puede abrir y cerrar en dispositivos móviles y tablets.
 * Se activa desde el Header y permite acceder a diferentes secciones de la aplicación con enlaces estilizados.
 * 
 * @module Sidebar
 * @author {Ángel Aragón}
 */

import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

/**
 * Componente Sidebar que muestra un menú de navegación con animaciones.
 * 
 * @function Sidebar
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.isOpen - Indica si el Sidebar está abierto o cerrado.
 * @param {Function} props.toggleSidebar - Función para alternar la visibilidad del Sidebar.
 * @returns {JSX.Element} El componente Sidebar renderizado.
 */
function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white transform z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out shadow-lg md:hidden`}
    >

      {/* Btn cerrar Sidebar */}
      <div className="p-4 flex justify-between items-center border-b border-gray-600">
        <span className="text-lg font-semibold">Menú</span>
        <button onClick={toggleSidebar} className="text-white text-2xl">
          <i className="bi bi-x"></i>
        </button>
      </div>

      <nav className="p-4 flex flex-col gap-4">
        <Link
          to="/"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-gray-300 transition-all duration-300 hover:bg-teal-500 hover:text-white ${
            location.pathname === '/' ? 'bg-teal-500 text-white' : ''
          }`}
        >
          <i className="bi bi-house-door-fill"></i> Home
        </Link>
        <Link
          to="/adopt"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-gray-300 transition-all duration-300 hover:bg-teal-500 hover:text-white ${
            location.pathname === '/adopt' ? 'bg-teal-500 text-white' : ''
          }`}
        >
          <i className="bi bi-heart-fill"></i> Adopta
        </Link>
        <Link
          to="/fav"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-gray-300 transition-all duration-300 hover:bg-teal-500 hover:text-white ${
            location.pathname === '/fav' ? 'bg-teal-500 text-white' : ''
          }`}
        >
          <i className="bi bi-star-fill text-lg"></i> Favoritos
        </Link>
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;