import { useContext, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import CatCard from "../CatCard/CatCard";
import Modal from "../Modal/Modal";
import CatDetails from "../CatDetails/CatDetails";
import { useTranslation } from "react-i18next";
import error from "../../assets/animations/error.json";
import Lottie from "lottie-react";
import FormError from "../FormError/FormError";

/**
 * Componente `FavoritesGrid`
 *
 * Este componente renderiza una cuadrícula responsiva con todos los gatos guardados como favoritos
 * por el usuario. Utiliza el contexto `FavoritesContext` para acceder a la lista de favoritos.
 *
 * Cada gato se muestra con el componente `CatCard`, y al pulsar "ver más info", se abre un `Modal`
 * con los detalles del gato mediante el componente `CatDetails`.
 *
 * Si no hay gatos favoritos, se muestra una animación con un mensaje de error traducido.
 *
 * Funcionalidades destacadas:
 * - Acceso al contexto global de favoritos.
 * - Modal con información detallada del gato seleccionado.
 * - Animación Lottie en caso de lista vacía.
 * - Compatible con i18n para mostrar mensajes traducidos.
 *
 * @component
 * @returns {JSX.Element} Una cuadrícula con tarjetas de gatos favoritos o un mensaje si no hay elementos.
 * @author Ana Castro, Ángel Aragón
 * @version 1.1
 * @since `MIC-60` Se agregó soporte de traducción para errores vacíos y animación.
 */
const FavoritesGrid = () => {
  const { favorites } = useContext(FavoritesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const { t } = useTranslation();
  const OpenModal = (cat) => {
    setSelectedCat(cat);
    setIsModalOpen(true);
  };

  if (favorites.length <= 0)
    return (
      <>
        <div className="w-25 h-25">
          <Lottie animationData={error} />
        </div>
        <FormError message={t("favorites_error")} />
      </>
    );

  return (
    <div className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(280px,_320px))] w-[78%] gap-15 py-15">
      {favorites.map((favorite, index) => (
        <CatCard
          key={favorite.id || index}
          product={favorite}
          id={favorite.id}
          url={favorite.url}
          breeds={favorite.breeds?.[0]?.name || "Unknown"}
          description={
            favorite.breeds?.[0]?.description
              ? favorite.breeds[0].description.slice(0, 150) + "..."
              : "No description available."
          }
          name={favorite.name}
          temperament={favorite.temperament}
          seeInfo={() => OpenModal(favorite)}
        />
      ))}
      {isModalOpen && (
        <div className="[&_h2]:text-2xl">
          <Modal
            isOpen={isModalOpen}
            title={selectedCat.name}
            onClose={() => setIsModalOpen(false)}
            className="text-2xl"
          >
            <CatDetails cat={selectedCat} />
          </Modal>
        </div>
      )}
    </div>
  );
};

export default FavoritesGrid;
