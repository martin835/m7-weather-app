import { initialState } from "../store";
import { ADD_TO_MYLOCATIONS, REMOVE_FROM_MYLOCATIONS } from "../actions";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MYLOCATIONS:
      return {
        ...state,
        myLocations: {
          ...state.myLocations,
          locations: [...state.myLocations.locations, action.payload],
        },
      };

    case REMOVE_FROM_MYLOCATIONS:
      return {
        ...state,
        myLocations: {
          ...state.myLocations,
          locations: state.myLocations.locations.filter(
            (location) => location.lat + location.lon !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
