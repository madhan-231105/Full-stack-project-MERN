import { createContext } from "react";
import { doctors } from "../assets/assets";

// Create context
export const AppContext = createContext();

// Create provider component
const AppContextProvider = (props) => {
  const currencySymbol ='$'
  const value = {
    doctors,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
    {
        props.children
    }
    </AppContext.Provider>
  );
};

export default AppContextProvider;
