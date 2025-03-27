import { useLocation } from "react-router-dom";
import AdoptForm from "../../components/AdoptForm/AdoptForm";
import FormError from "../../components/FormError/FormError";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import error from "../../assets/animations/error.json";

/**
 * Página de adopción que recibe el nombre del gato desde el estado
 * y lo pasa al formulario de adopción como prop.
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
