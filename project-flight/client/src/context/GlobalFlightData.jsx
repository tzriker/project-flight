// GlobalStateContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({alt:10, his:20, adi:50});

  // Define functions to update the global state
  const updateGlobalState = (newValue) => {
    setGlobalState(newValue);
  };

  return (
    <GlobalStateContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
