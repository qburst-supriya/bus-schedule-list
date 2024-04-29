export interface IDataContext<T> {
  state: DataType<T>;
  dispatch: Dispatch<ActionType>;
}

export type DataType<T> = {
  data: T;
};

import { Dispatch, ReactNode } from 'react';

export type ActionType = {
  type: string;
  payload?: unknown;
};

export type CustomContextHookType<T> = {
  context: React.Context<T>;
};

export type DataProviderType = {
  children: ReactNode;
};

export type ContextType<T> = {
  data: T;
  actionList: (data: T) => void;
};
