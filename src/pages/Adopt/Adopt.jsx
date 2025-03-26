import { useLocation } from "react-router-dom";
import AdoptForm from "../../components/AdoptForm/AdoptForm";
import FormError from "../../components/FormError/FormError";

/**
 * Página de adopción que recibe el nombre del gato desde el estado
 * y lo pasa al formulario de adopción como prop.
 */
function Adopt() {
  const location = useLocation();
  const catName = location.state?.catName;

  if (!catName) {
    return <FormError message="No se ha especificado ningún michi." />;
  }

  return <AdoptForm catName={catName} />;
}

export default Adopt;
