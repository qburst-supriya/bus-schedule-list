import React, { ReactNode, useContext } from 'react';

type DataProviderType<T, U, K> = {
  children: ReactNode;
  Context: React.Context<T>;
  state: U;
  actionList: (data: K) => void;
};

const createContext = <T,>(value: T): React.Context<T> => {
  return React.createContext(value);
};

const useCustomContext = <T,>(DataContext: React.Context<T>) => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useCustomContext must be used within a ContextProvider');
  }
  return context;
};

const DataProvider = <T, U, K>({ children, Context, state, actionList }: DataProviderType<T, U, K>) => {
  const value = { data: { ...state }, actionList } as T;
  return <Context.Provider value={{ ...value }}>{children}</Context.Provider>;
};

export { useCustomContext, createContext, DataProvider };
