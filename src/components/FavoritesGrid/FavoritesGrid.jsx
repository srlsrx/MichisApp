import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import CatCard from "../CatCard/CatCard";

/**
 * @component FavoritesGrid
 * @description Renderiza una cuadrícula de tarjetas de gatos favoritos usando el contexto de favoritos. Cada gato se muestra como un componente `CatCard`.
 * @author Ana Castro
 *
 * @returns {JSX.Element} Cuadrícula responsive con los gatos favoritos del usuario.
 */
const FavoritesGrid = () => {
    const { favorites } = useContext(FavoritesContext);

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
                />
            ))}
        </div>
    );
};

export default FavoritesGrid;
