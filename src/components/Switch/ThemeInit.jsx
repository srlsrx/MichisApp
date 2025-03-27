import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import SwitchToggle from "./Switch";

/**
 * @component ThemeToggle
 * @description Componente que permite alternar entre los temas claro y oscuro utilizando el contexto `ThemeContext`. Utiliza el componente `SwitchToggle` para mostrar el interruptor.
 * @author Nico Fernández
 *
 * @returns {JSX.Element} Contenedor con un interruptor para cambiar el tema de la aplicación.
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <SwitchToggle onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  );
};

export default ThemeToggle;