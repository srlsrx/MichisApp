import React, { useContext } from "react";
import { Star } from "lucide-react";
import { FavoritesContext } from "../../contexts/FavoritesContext";

const FavoritesButton = ({ product }) => {
    const { favorites, dispatch } = useContext(FavoritesContext);
    const isFavorite = favorites.some(fav => fav?.id === product?.id);

    const toggleFavorite = () => {
        dispatch({
            type: isFavorite ? "DELETE_FAVORITE" : "ADD_FAVORITE",
            payload: product,
        });
    };

    return (
        <button onClick={toggleFavorite} className="p-2 absolute top-0 right-0">
            <Star className={`w-8 h-8 transition-all duration-300 ${isFavorite ? "fill-teal-500 text-teal-500" : "fill-transparent text-teal-500"}`} fill="currentColor"/>
        </button>
    );
};

export default FavoritesButton;

