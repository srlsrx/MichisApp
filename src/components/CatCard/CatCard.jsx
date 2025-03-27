import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { useTranslation } from "react-i18next";

/**
 * Componente que muestra detalles generales del gato y utiliza los componentes `FavoritesButton` y `Button`
 *
 * @returns {JSX.Element} Renderiza la card del gato
 * @author {Ana Castro}
 */

const CatCard = ({
  id,
  url,
  product,
  breeds,
  name,
  temperament,
  description,
  action,
  seeInfo,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <article
      className="card-container w-[100%] flex flex-col shadow-lg shadow-teal-500/40 ring-2 dark:shadow-teal-300/40 ring-green-400/20 rounded-2xl overflow-hidden min-h-full transform transition duration-300 hover:scale-105"
      id={id}
      onClick={action}
    >
      <img
        className="w-full min-h-55 max-h-55 object-cover"
        src={url}
        alt="Gatito en adopción"
      />
      <FavoritesButton
        position=" absolute top-0 right-0"
        product={product}
        id={id}
      />
      <p className="mt-2 text-teal-500 font-bold text-xl">{name}</p>
      <span className="absolute left-2 top-2 shadow-[0_0px_10px] text-sm font-bold shadow-teal-200/60 text-teal-700 bg-teal-200/70 min-w-[50%] max-w-[80%] ring-2 ring-teal-500 mt-1 rounded-3xl px-4 py-0">
        {breeds}
      </span>
      <p className="mt-2 mb-4 px-7 text-center min-w-65 dark:text-teal-200 text-gray-700 text-md">
        {t(temperament)}
      </p>
      <p className="px-7 text-justify min-w-65 min-h-25 dark:text-gray-200 text-gray-700 text-sm">
        {description}
        <a className="text-teal-400 cursor-pointer" onClick={seeInfo}>
          {" "}
          {t("Ver_mas")}
        </a>{" "}
      </p>
      <Button
        text={t("adopt_me")}
        onClick={() => navigate("/adopt", { state: { catName: name } })}
      />
    </article>
  );
};

export default CatCard;
