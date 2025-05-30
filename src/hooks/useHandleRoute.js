import { useReducer } from "react";

const initialState = {
  selectedRoute: null,
};

const ACTION_TYPES = {
  SET_SELECTED_ROUTE: "SET_SELECTED_ROUTE",
};

function handleRouteReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_SELECTED_ROUTE:
      return {
        ...state,
        selectedRoute: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const useHandleRoute = () => {
  const [state, dispatch] = useReducer(handleRouteReducer, initialState);

  const setSelectedRoute = (selectedRoute) => {
    dispatch({ type: ACTION_TYPES.SET_SELECTED_ROUTE, payload: selectedRoute });
  };

  return {
    selectedRoute: state.selectedRoute,
    setSelectedRoute,
  };
};
