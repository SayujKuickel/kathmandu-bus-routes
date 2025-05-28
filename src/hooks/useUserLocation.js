import { useReducer } from "react";

const initialState = {
  userLocation: null,
  isSearchingLocation: false,
};

const ACTION_TYPES = {
  SET_USER_LOCATION: "SET_USER_LOCATION",
  START_SEARCH: "START_SEARCH",
  STOP_SEARCH: "STOP_SEARCH",
};

function userLocationReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
        isSearchingLocation: false,
      };
    case ACTION_TYPES.START_SEARCH:
      return {
        ...state,
        isSearchingLocation: true,
      };
    case ACTION_TYPES.STOP_SEARCH:
      return {
        ...state,
        isSearchingLocation: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const useUserLocation = () => {
  const [state, dispatch] = useReducer(userLocationReducer, initialState);

  const setUserLocation = (location) => {
    dispatch({ type: ACTION_TYPES.SET_USER_LOCATION, payload: location });
  };

  const startLocationSearch = () => {
    dispatch({ type: ACTION_TYPES.START_SEARCH });
  };

  const stopLocationSearch = () => {
    dispatch({ type: ACTION_TYPES.STOP_SEARCH });
  };

  return {
    userLocation: state.userLocation,
    isSearchingLocation: state.isSearchingLocation,
    setUserLocation,
    startLocationSearch,
    stopLocationSearch,
  };
};
