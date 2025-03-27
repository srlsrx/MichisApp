/**
 * Componente Footer que muestra información de copyright y autores.
 *
 * Este componente se encuentra en la parte inferior de la aplicación y mantiene el estilo
 * general con un fondo degradado similar al Header.
 *
 * @module Footer
 * @author {Ángel Aragón}
 */
import { useTranslation } from "react-i18next";
/**
 * Componente Footer que muestra la información de derechos de autor.
 *
 * @function Footer
 * @returns {JSX.Element} El componente Footer renderizado.
 */
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 bg-gradient-to-r from-teal-500 to-green-500 dark:text-gray-900 text-white text-sm shadow-md">
      <p>
        &copy; {new Date().getFullYear()}
        {t("copy")}
      </p>
      <p className="mt-1">
        {t("created_by")}{" "}
        <span className="font-semibold">
          Nico Fernández, Ana Castro & Ángel Aragón
        </span>
      </p>
    </footer>
  );
}

export default Footer;
