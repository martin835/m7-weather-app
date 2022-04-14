export const ADD_TO_MYLOCATIONS = "ADD_TO_MYLOCATIONS";
export const REMOVE_FROM_MYLOCATIONS = "REMOVE_FROM_MYLOCATIONS";

export const addToMyLocationsAction = (location) => ({
  type: ADD_TO_MYLOCATIONS,
  payload: location,
});

export const removeFromMyLocationsAction = (lat, lon) => ({
  type: REMOVE_FROM_MYLOCATIONS,
  payload: lat + lon,
});
