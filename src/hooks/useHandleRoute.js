import { useReducer } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const route = searchParams.get("route");

  const inlState = route
    ? { ...initialState, selectedRoute: route }
    : initialState;

  const [state, dispatch] = useReducer(handleRouteReducer, inlState);

  const setSelectedRoute = (selectedRoute) => {
    dispatch({ type: ACTION_TYPES.SET_SELECTED_ROUTE, payload: selectedRoute });
  };

  return {
    selectedRoute: state.selectedRoute,
    setSelectedRoute,
  };
};
