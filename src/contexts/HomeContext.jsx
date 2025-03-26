
import CatService from '../services/catServices';
import { createContext, useReducer, useEffect } from 'react';
import { homeReducer, initialState } from './HomeReducer';

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);


  const getHomeList = async () => {
    try {
      const data = await CatService();
      dispatch({ type: "SET_HOME_LIST", payload: data });     
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
