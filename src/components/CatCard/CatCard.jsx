import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import FavoritesButton from "../FavoritesButton/FavoritesButton";
import { useTranslation } from "react-i18next";

/**
 * configuramos la card y le damos estilos
 * @async
 * @returns
 * @author {Ana Castro}
 */

const CatCard = ({ id, url, product, breeds, description }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <article className="card-container w-[100%] flex flex-col shadow-lg shadow-teal-500/40 ring-2 dark:shadow-teal-300/40 ring-green-400/20 rounded-2xl overflow-hidden min-h-full transform transition duration-300 hover:scale-105" id={id} >
        <img className="w-full min-h-55 max-h-55 object-cover" src={url} alt="Gatito en adopción"/>        
        <FavoritesButton position=" absolute top-0 right-0" product={product} id={id} />
        <p className="mt-2 text-teal-500 font-bold text-xl">{breeds}</p>
        <p className="mt-2 px-7 text-justify min-h-25 dark:text-gray-200 text-gray-700 text-sm">{description}</p>            
        <Button
        text={t("adopt_me")}
        type="submit"
        onClick={() => navigate("/adopt", { state: { breeds } })}
      />
    </article>
  );
};

export default CatCard;
