import CatService from "../services/catServices";
import { createContext, useReducer, useEffect } from "react";
import { homeReducer, initialState } from "./homeReducer";
import gatos from "../assets/data/catsData";

export const HomeContext = createContext();

/**
 * @component HomeProvider
 * @description Proveedor de contexto que gestiona la lista de gatos para la página de inicio. Obtiene los datos desde un servicio externo y los enriquece con datos locales aleatorios.
 *              Expone la lista enriquecida a través del contexto `HomeContext`.
 * @author Ana Castro
 *
 * @param {Object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto de inicio.
 *
 * @returns {JSX.Element} Proveedor de contexto para la lista de gatos de la home.
 */
export const HomeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(homeReducer, initialState);
    const getHomeList = async () => {
        try {
            const data = await CatService();
            const shuffled = gatos.sort(() => 0.5 - Math.random());
            const enriched = data.map((cat, index) => ({
                ...cat,
                name: shuffled[index % gatos.length].nombre,
                temperament: shuffled[index % gatos.length].temperament,
            }));
            dispatch({ type: "SET_HOME_LIST", payload: enriched });
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };
    useEffect(() => {
        getHomeList();
    }, []);
    return (
        <HomeContext.Provider value={{ homeList: state.homeList, dispatch }}>
            {children}
        </HomeContext.Provider>
    );
};
