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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import logo from '/images/paws&claws-logo.png';
import ThemeToggle from '../Switch/ThemeInit';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

/**
 * Componente Header que muestra una barra de navegación estilizada y controla la visibilidad del Sidebar.
 * 
 * @function Header
 * @returns {JSX.Element} El componente Header renderizado.
 */
function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    const navigate = useNavigate()

    return (
        <>
            <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-500 to-green-500 shadow-md w-full">

                <div className="flex items-center gap-2">
                    <img src={logo} alt="Paws & Claws" onClick={()=>navigate("/")} className="h-16 w-auto cursor-pointer" />
                </div>

                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/"
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${location.pathname === '/' ? 'bg-white dark:bg-gray-900 text-teal-500 font-bold' : 'text-white dark:text-gray-900'
                            }`}
                    >
                        <i className="bi bi-house-door-fill"></i> Home
                    </Link>
                    <Link
                        to="/adopt"
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${location.pathname === '/adopt' ? 'bg-white dark:bg-gray-900 text-teal-500 font-bold' : 'text-white dark:text-gray-900'
                            }`}
                    >
                        <i className="bi bi-heart-fill"></i> {t("adopt")}
                    </Link>
                    <Link
                        to="/fav"
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${location.pathname === '/fav' ? 'bg-white dark:bg-gray-900 text-teal-500 font-bold' : 'text-white dark:text-gray-900'
                            }`}
                    >
                        <i className="bi bi-star-fill text-lg"></i> {t("favorites")}
                    </Link>
                    <Link
                        to="/about-us"
                        className={`relative flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 hover:bg-white dark:hover:bg-gray-900 hover:text-teal-500 ${location.pathname === '/about-us' ? 'bg-white dark:bg-gray-900 text-teal-500 font-bold' : 'text-white dark:text-gray-900'
                            }`}
                    >
                        <i className="bi bi-person-fill text-lg"></i> {t("about_us")}
                    </Link>
                    <LanguageSwitcher />
                </nav>
                <ThemeToggle />
                
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
