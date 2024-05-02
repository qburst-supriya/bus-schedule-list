import React, { useReducer } from 'react';
import { DataProviderType } from '../../../../store/types';
import { createContext, DataProvider } from '../../../../store/baseContext';

import { ActionKind, ActionType, TripDetailsContextType, TripDetailsDataType } from './types';

// const TripDetailsContext = React.createContext<TripDetailsContextType | undefined>(undefined);
// TripDetailsContext.displayName = 'TripDetailsContext';

//reducer
export const TripDetailsReducer = (state: TripDetailsDataType, action: ActionType): TripDetailsDataType => {
  switch (action.type) {
    case 'FETCH_DATA': {
      return { data: { ...action.payload } };
    }
    default:
      return state;
  }
};

const initialData = {
  data: { bookings: [], message: '', success: false },
};

const initialContextData = {
  actionList: () => {},
  data: { ...initialData },
};

export const TripDetailsContext = createContext<TripDetailsContextType>(initialContextData);

export const TripDetailsProvider: React.FC<DataProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(TripDetailsReducer, initialData);
  const setTripDetailsData = (data: TripDetailsDataType) => {
    dispatch({ type: ActionKind.fetch, payload: data });
  };

  return (
    <DataProvider Context={TripDetailsContext} state={state} actionList={setTripDetailsData}>
      {children}
    </DataProvider>
  );
};

// export const TripDetailsContextProvider: React.FC<DataProviderType> = ({ children }) => {
//   const [tripDetailsData, setTripDetailsData] = useState<tripDetailsDataType>(initialData);

//   return (
//     <TripDetailsContext.Provider value={{ tripDetailsData, setTripDetailsData }}>
//       {children}
//     </TripDetailsContext.Provider>
//   );
// };

// export default TripDetailsContext;
