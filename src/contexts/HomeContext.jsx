
import CatService from '../services/catServices';
import { createContext, useReducer, useEffect } from 'react';
import { homeReducer, initialState } from './HomeReducer';
import gatos from '../assets/data/catsData'

export const HomeContext = createContext();

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
