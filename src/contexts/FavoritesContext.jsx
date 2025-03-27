import React, { createContext, useReducer, useEffect } from "react";
import { favoritesReducer } from "./FavoritesReducer";

// eslint-disable-next-line react-refresh/only-export-components
export const FavoritesContext = createContext();
/**
 * @component FavoritesProvider
 * @description Proveedor de contexto que gestiona la lista de favoritos usando `useReducer` y sincroniza su estado con `localStorage`.
 *              Expone `favorites` y `dispatch` a través del contexto `FavoritesContext`.
 * @author Ana Castro
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto de favoritos.
 *
 * @returns {JSX.Element} Proveedor de contexto para la gestión de favoritos.
 */
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
