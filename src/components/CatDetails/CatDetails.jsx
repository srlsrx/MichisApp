import gatos from "../../assets/data/catsData";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * @component CatDetails
 * Muestra los detalles de un gato, incluyendo imagen, raza, descripción, temperamento,
 *              edad y estado de vacunación. También permite realizar una acción (como adoptar) mediante un botón.
 * @author {Ana Castro}
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.cat - Objeto del gato a mostrar. Contiene propiedades como `url`, `name` y `breeds`.
 * @param {Function} props.action - Función opcional que representa una acción a ejecutar (no utilizada directamente aquí).
 * @param {string} props.text - Texto opcional que puede usarse en la interfaz (no utilizado directamente aquí).
 *
 * @returns {JSX.Element} Componente que renderiza los detalles del gato y un botón para adoptar.
 */
const CatDetails = ({ cat }) => {
  const catMock = gatos.find((g) => g.nombre === cat.name);
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="mt-4 w-full flex flex-col items-start">
      <img src={cat.url} alt={cat.name} className="w-100 h-70 object-cover" />
      <p className="w-full px-[20%] text-lg mt-3">
        <strong className=" text-teal-400">{t("Breed")}:&nbsp;</strong>
        {cat.breeds[0].name}
      </p>
      <p className="text-justify mt-5">
        <strong className="text-base text-teal-400">
          {t("Description")}:{" "}
        </strong>
        {cat.breeds[0].description}
      </p>
      <p className="text-justify mt-3">
        <strong className="text-base text-teal-400">
          {t("Temperament")}:{" "}
        </strong>
        {t(cat.temperament)}
      </p>
      <p className="text-left w-full mx-[15%] mt-10">
        <strong className="text-base text-teal-400">{t("Age")}: </strong>
        {catMock.edad}&nbsp;&nbsp;
        <strong className="text-base text-teal-400 ml-24">
          {t("Vaccines")}:{" "}
        </strong>
        {cat.breeds[0].vacunas ? '{t("Yes")}' : "No"}
      </p>
      <Button
        className="justify ml-0 mt-5 w-full text-lg"
        text={t("adopt_me")}
        onClick={() =>
          navigate("/adopt", { state: { catName: cat.breeds[0].name } })
        }
      />
    </div>
  );
};

export default CatDetails;
