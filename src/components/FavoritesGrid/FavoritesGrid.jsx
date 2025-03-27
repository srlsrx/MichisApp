import { useContext, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import CatCard from "../CatCard/CatCard";
import Modal from '../Modal/Modal'; 
import CatDetails from '../CatDetails/CatDetails';

/**
 * @component FavoritesGrid
 * @description Renderiza una cuadrícula de tarjetas de gatos favoritos usando el contexto de favoritos. Cada gato se muestra como un componente `CatCard`.
 * @author Ana Castro
 *
 * @returns {JSX.Element} Cuadrícula responsive con los gatos favoritos del usuario.
 */
const FavoritesGrid = () => {
    const { favorites } = useContext(FavoritesContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [closeModal, setcloseModal] = useState(true);
    const [selectedCat, setSelectedCat] = useState(null);

    const OpenModal = (cat) => {
        setSelectedCat(cat);
        setIsModalOpen(true);
    };

    const CloseModal = () => {
        setIsModalOpen(false);
        setSelectedCat(null);
    };

    if (favorites.length <= 0)
        return (
            <div>
                <h1 className="text-red-500 text-lg border border-red-300 rounded bg-red-100 p-2 mt-5">
                    Aún no has seleccionado nigún michi como tu favorito 😿
                    Seleciona los que quieras! 🐱
                </h1>
            </div>
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
                            ? favorite.breeds[0].description.slice(0, 150) +
                              "..."
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
                        onClose={CloseModal}
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
