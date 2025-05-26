import { useReducer } from "react";

const initialState = {
  userLocation: null,
  isSearching: false,
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
        isSearching: false,
      };
    case ACTION_TYPES.START_SEARCH:
      return {
        ...state,
        isSearching: true,
      };
    case ACTION_TYPES.STOP_SEARCH:
      return {
        ...state,
        isSearching: false,
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
    isSearching: state.isSearching,
    setUserLocation,
    startLocationSearch,
    stopLocationSearch,
  };
};
