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


