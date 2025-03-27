import { useLocation } from "react-router-dom";
import AdoptForm from "../../components/AdoptForm/AdoptForm";
import FormError from "../../components/FormError/FormError";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import error from "../../assets/animations/error.json";

/**
 * Página de adopción que muestra un formulario para adoptar un gato específico.
 *
 * Este componente recibe el nombre del gato a través del estado de navegación (`location.state.catName`)
 * y renderiza el formulario correspondiente para completar la solicitud.
 *
 * Si no se proporciona el nombre del gato (por ejemplo, si se accede a la ruta directamente),
 * se muestra una animación de error y un mensaje indicándolo.
 *
 * Utiliza:
 * - `react-router-dom` para obtener los datos de navegación.
 * - `react-i18next` para traducciones multilenguaje.
 * - `lottie-react` para animación en caso de error.
 *
 * @component
 * @returns {JSX.Element} La página de adopción renderizada o un error si no hay gato seleccionado.
 * @author {Ángel Aragón}
 */

function Adopt() {
  const location = useLocation();
  const catName = location.state?.catName;
  const { t } = useTranslation();

  if (!catName) {
    return (
      <>
        <div className="w-25 h-25">
          <Lottie animationData={error} />
        </div>
        <FormError message={t("adopt_error")} />
      </>
    );
  }

  return <AdoptForm catName={catName} />;
}

export default Adopt;
