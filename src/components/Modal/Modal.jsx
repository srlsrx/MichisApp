import PropTypes from "prop-types";

/**
 * Componente reutilizable de modal con soporte para modo oscuro.
 *
 * Puede contener cualquier contenido HTML o JSX, admite título y opcionalmente un icono animado.
 *
 * @component
 * @param {boolean} isOpen - Indica si el modal debe estar visible.
 * @param {function} onClose - Función para cerrar el modal.
 * @param {string} title - Título principal del modal.
 * @param {React.ReactNode} children - Contenido dentro del modal (texto, HTML o componentes).
 * @param {React.ReactNode} icon - Icono o animación opcional que aparece a la izq del título.
 * @param {string} [props.className] - Clases CSS opcionales. 
 * @returns {JSX.Element|null} El modal renderizado o `null` si está cerrado.
 * @author Ángel
 */
function Modal({ isOpen, onClose, title, children, icon, className }) {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 ${className}`}>
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 flex items-center justify-center">
            {icon}            
          </div>

          <h2 className="flex-1 text-2xl font-bold text-center text-teal-500">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-teal-500 text-3xl font-bold transition cursor-pointer"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
        <div className="mt-2 mb-5 border-t border-gray-200 dark:border-gray-700" />
        <div className="text-center text-sm">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Modal;
