/**
 * Componente Footer que muestra información de copyright y autores.
 * 
 * Este componente se encuentra en la parte inferior de la aplicación y mantiene el estilo
 * general con un fondo degradado similar al Header.
 * 
 * @module Footer
 * @author Ángel
 */

/**
 * Componente Footer que muestra la información de derechos de autor.
 * 
 * @function Footer
 * @returns {JSX.Element} El componente Footer renderizado.
 */
function Footer() {
    return (
      <footer className="w-full flex flex-col items-center justify-center py-6 bg-gradient-to-r from-teal-500 to-green-500 dark:text-gray-900 text-white text-sm shadow-md">
        <p>&copy; {new Date().getFullYear()} Factoria F5. Todos los derechos reservados.</p>
        <p className="mt-1">Creado por: <span className="font-semibold">Nico Fernández, Ana Castro y Ángel Aragón</span></p>
      </footer>
    );
  }
  
  export default Footer;
