import React, { createContext, useReducer, useEffect } from 'react';
import { favoritesReducer } from './FavoritesReducer';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, dispatch] = useReducer(favoritesReducer, [], () => {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
  
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
   
    return (
        <FavoritesContext.Provider value={{ favorites, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
};


