import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext({});

interface StateProviderProps {
    reducer: any;
    initialState: any;
    children: React.ReactNode;
}

export const StateProvider = ({ reducer, initialState, children }: StateProviderProps) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
