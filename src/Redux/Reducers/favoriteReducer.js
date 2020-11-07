import { ADD_FAVORITE, REMOVE_FAVORITE } from "../Actions/favoriteActions";

const initialState = { favorite: [] };

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return state.favorite.find((elem) => elem.id === action.payload.id)
        ? state
        : { favorite: [...state.favorite, action.payload] };

    case REMOVE_FAVORITE:
      return {
        favorite: [
          ...state.favorite.filter((elem) => elem.id != action.payload.id),
        ],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
