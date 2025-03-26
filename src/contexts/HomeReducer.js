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
  




//creo la lista que cojo de la api, que es la que se mostrara en el carrusel 
// de home "homeList", y se la asigno al estado inicial