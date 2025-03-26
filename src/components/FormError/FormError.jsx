/**
 * Componente que muestra un mensaje de error de validación para formularios.
 *
 * Este componente se usa junto con react-hook-form u otros formularios
 * para mostrar errores debajo de cada input de forma uniforme.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.message - Mensaje de error a mostrar.
 * @returns {JSX.Element|null} Elemento visual con el error o null si no hay mensaje.
 * @author {Ángel Aragón}
 */
function FormError({ message }) {
  if (!message) return null;

  return (
    <p className="text-red-500 text-sm border border-red-300 rounded bg-red-100 p-2 mt-1">
      {message}
    </p>
  );
}

export default FormError;
