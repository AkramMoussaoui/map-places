import { ADD_MARKER, REMOVE_MARKER } from "../Actions/markerActions";

const initialState = { markers: [] };

const markerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKER:
      return state.markers.find((elem) => elem.id === action.payload.id)
        ? state
        : { markers: [...state.markers, action.payload] };
    case REMOVE_MARKER:
      return {
        markers: [
          ...state.markers.filter((elem) => elem.id != action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default markerReducer;
