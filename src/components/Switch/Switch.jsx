import { HiSun, HiMoon } from "react-icons/hi";

/**
 * @component SwitchToggle
 * @description Interruptor visual que permite cambiar entre dos estados (como modo claro/oscuro). Muestra iconos de sol y luna, e incluye animaciones suaves al cambiar de estado.
 * @author Nico Fernández
 *
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.checked - Estado actual del interruptor (activado o desactivado).
 * @param {Function} props.onChange - Función que se ejecuta al cambiar el estado del interruptor.
 *
 * @returns {JSX.Element} Componente de interruptor accesible con animaciones y soporte para temas.
 */
function SwitchToggle({ checked, onChange }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className="sr-only peer"
      />
      <div className="w-12 h-6 bg-gray-300 peer-checked:bg-gray-900 rounded-full flex items-center justify-between px-1 transition duration-300">
        <HiSun className="dark:text-gray-100 text-gray-900 transition-colors duration-500" />
        <HiMoon className="dark:text-gray-100 text-gray-900 transition-colors duration-500" />
      </div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-transform duration-300"></div>
    </label>
  );
}

export default SwitchToggle;