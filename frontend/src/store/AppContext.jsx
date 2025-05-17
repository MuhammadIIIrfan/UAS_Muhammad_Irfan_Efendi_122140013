import { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

const initialState = {
  berita: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_BERITA":
      return { ...state, berita: action.payload };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
