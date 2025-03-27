/**
 * @function favoritesReducer
 * @description Función reductora que gestiona el estado de la lista de favoritos. Permite añadir y eliminar elementos del estado en función de la acción recibida.
 * @author Ana Castro
 *
 * @param {Array} state - Estado actual de los favoritos.
 * @param {Object} action - Acción con un tipo y un payload que determina cómo modificar el estado.
 * @param {string} action.type - Tipo de acción a realizar. Puede ser "ADD_FAVORITE" o "DELETE_FAVORITE".
 * @param {Object} action.payload - Datos necesarios para ejecutar la acción. Debe incluir un `id` en ambos casos.
 *
 * @returns {Array} Nuevo estado actualizado de la lista de favoritos.
 */
export const favoritesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            if (!action.payload?.id) return state;
            return [...state, action.payload];

        case "DELETE_FAVORITE":
            return state.filter(fav => fav.id !== action.payload.id);

        default:
            return state;
    }
};
