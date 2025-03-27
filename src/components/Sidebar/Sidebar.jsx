/**
 * Componente Sidebar que se desliza para mostrar un menú de navegación.
 *
 * Este componente muestra un menú lateral que se puede abrir y cerrar en dispositivos móviles y tablets.
 * Se activa desde el Header y permite acceder a diferentes secciones de la aplicación con enlaces estilizados.
 *
 * @module Sidebar
 * @author {Ángel Aragón}
 */

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

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
  const { t } = useTranslation();

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-700 text-white transform z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg min-[925px]:hidden`}
    >
      {/* Btn cerrar Sidebar */}
      <div className="p-4 flex justify-between items-center border-b border-gray-600">
        <span className="text-lg font-semibold">Menú</span>
        <button
          onClick={toggleSidebar}
          className="text-white text-2xl hover:text-teal-500 cursor-pointer"
        >
          <i className="bi bi-x"></i>
        </button>
      </div>

      <nav className="p-4 flex flex-col gap-4">
        <Link
          to="/"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${
            location.pathname === "/"
              ? "bg-white dark:bg-gray-900 text-teal-500 font-bold"
              : "text-white dark:text-teal-50"
          }`}
        >
          <i className="bi bi-house-door-fill"></i> Home
        </Link>
        <Link
          to="/adopt"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${
            location.pathname === "/adopt"
              ? "bg-white dark:bg-gray-900 text-teal-500 font-bold"
              : "text-white dark:text-teal-50"
          }`}
        >
          <i className="bi bi-heart-fill"></i> {t("adopt")}
        </Link>
        <Link
          to="/fav"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${
            location.pathname === "/fav"
              ? "bg-white dark:bg-gray-900 text-teal-500 font-bold"
              : "text-white dark:text-teal-50"
          }`}
        >
          <i className="bi bi-star-fill text-lg"></i> {t("favorites")}
        </Link>
        <Link
          to="/about-us"
          className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${
            location.pathname === "/about-us"
              ? "bg-white dark:bg-gray-900 text-teal-500 font-bold"
              : "text-white dark:text-teal-50"
          }`}
        >
          <i className="bi bi-person-fill text-lg"></i> {t("about_us")}
        </Link>
        <LanguageSwitcher />
      </nav>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
