import PropTypes from "prop-types";

/**
 * Componente de botón reutilizable con estilos personalizados.
 *
 * Este componente genera un botón estilizado con Tailwind CSS que se puede adaptar
 * a distintos usos mediante props. Es ideal para mantener consistencia visual en toda la aplicación.
 *
 * Permite personalizar:
 * - Tipo de botón (submit, button, etc.)
 * - Texto
 * - Colores de fondo, texto y hover
 * - Clase adicional
 * - Acción al hacer clic
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.type="button"] - Tipo del botón (`button`, `submit`, etc.).
 * @param {string} props.text - Texto que se muestra dentro del botón.
 * @param {string} [props.className] - Clases CSS adicionales opcionales.
 * @param {Function} [props.onClick] - Función que se ejecuta al hacer clic.
 * @param {string} [props.bgColor="bg-teal-500"] - Clase Tailwind para el color de fondo.
 * @param {string} [props.bgColorHover="hover:bg-green-400"] - Clase Tailwind para el color hover.
 * @param {string} [props.txtColor="text-white"] - Clase Tailwind para el color del texto.
 * @returns {JSX.Element} Botón personalizado con estilos dinámicos.
 * @author {Ángel Aragón}
 */
function Button({
  type = "button",
  text,
  className,
  onClick,
  bgColor = "bg-teal-500",
  bgColorHover = "hover:bg-green-400",
  txtColor = "text-white",
}) {
  return (
    <button
      type={type}
      className={`${bgColor} ${bgColorHover} ${txtColor} ${className} justify-self-end cursor-pointer text-white px-4 py-2 m-4 rounded-full shadow-md transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
