import React, { createContext, useReducer, useContext } from 'react';
import { applicationReducer } from './reducer';

export const ApplicationStateContext = createContext({});

const initialState = {
  appTitle: 'z-Meter',
  readings: [
    { name: 'one', amount: '500$' },
    { name: '2', amount: '123$' },
    { name: '3', amount: '22$' },
    { name: 'four', amount: '1233$' }
  ],
  activeReadingIndex: 0
}

export function useApplicationState(){
  return useContext(ApplicationStateContext);
}

export default function ApplicationStateProvider({ children }) {
  const [state, dispatch] = useReducer(applicationReducer, initialState);
  return (
    <ApplicationStateContext.Provider value={{ state, dispatch }}>
      {children}
    </ApplicationStateContext.Provider>
  )
}
