import { createContext, useState, useEffect } from "react";

/**
 * @component ThemeProvider
 * @description Proveedor de contexto que gestiona el tema de la aplicación (claro u oscuro) utilizando `localStorage` y actualizando el atributo `data-theme` en el elemento HTML.
 *              Proporciona el estado del tema y una función para alternarlo.
 * @author Nico Fernández
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto del tema.
 *
 * @returns {JSX.Element} Proveedor de contexto del tema.
 */
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );
    useEffect(() => {
        const main = document.querySelector("html");
        if (main) {
            main.setAttribute("data-theme", theme);
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
