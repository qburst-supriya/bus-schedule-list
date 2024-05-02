import React, { useReducer } from 'react';
import { createContext, DataProvider } from '../../../../store/baseContext';
import { ActionKind, ActionType, ScheduleDataType, ScheduleListContextType } from './types';
import { DataProviderType } from '../../../../store/types';

//reducer
export const ScheduleListReducer = (state: ScheduleDataType, action: ActionType): ScheduleDataType => {
  switch (action.type) {
    case 'LIST_DATA': {
      return { data: { ...action.payload } };
    }
    default:
      return state;
  }
};

const initialData = {
  data: { resultCount: 0, trips: [], message: '', success: false },
};

const initialContextData = {
  actionList: () => {},
  data: { ...initialData },
};

export const ScheduleDataContext = createContext<ScheduleListContextType>(initialContextData);

export const ScheduleListProvider: React.FC<DataProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(ScheduleListReducer, initialData);
  const setScheduleListData = (data: ScheduleDataType) => {
    dispatch({ type: ActionKind.list, payload: data });
  };

  return (
    <DataProvider Context={ScheduleDataContext} state={state} actionList={setScheduleListData}>
      {children}
    </DataProvider>
  );
};
