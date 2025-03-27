/**
 * @function homeReducer
 * @description Función reductora que gestiona el estado global de la home. Maneja la acción "SET_HOME_LIST" para actualizar la lista principal de gatos.
 * @author Ana Castro
 *
 * @param {Object} state - Estado actual de la home.
 * @param {Object} action - Acción que se desea ejecutar.
 * @param {string} action.type - Tipo de acción a ejecutar.
 * @param {*} action.payload - Datos asociados a la acción.
 *
 * @returns {Object} Nuevo estado actualizado.
 */
export const initialState = {
    homeList: [],
  };
  
  export const homeReducer = (state, action) => {
    switch (action.type) {
      case "SET_HOME_LIST":
        return {...state, homeList: action.payload};
      default:
        return state;
    }
  };