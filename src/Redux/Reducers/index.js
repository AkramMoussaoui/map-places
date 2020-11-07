import { combineReducers } from "redux";
import markerReducer from "./markerReducer";
import favoriteReducer from "./favoriteReducer";

const reducer = combineReducers({
  favorite: favoriteReducer,
  markers: markerReducer,
});

export default reducer;
