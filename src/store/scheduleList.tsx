import React, {  ReactNode, useContext, useState } from "react";


type scheduleDataType = {
  resultCount: number,
  trips: {id: number}[],
  message: string,
  success: boolean
}

interface ScheduleListContextInterface {
  scheduleListData: scheduleDataType;
  setScheduleListData: React.Dispatch<React.SetStateAction<scheduleDataType>>;
}


type ScheduleDataProvider = {
  children: ReactNode
}

const initialData = {
  resultCount: 0,
  trips: [],
  message: '',
  success: false
}

 const ScheduleListStore = React.createContext<ScheduleListContextInterface | undefined>(undefined);
  ScheduleListStore.displayName = 'ScheduleListStore'


  export const useScheduleListStore = () => {
    const context = useContext(ScheduleListStore);
    if (!context) {
      throw new Error('useCustomContext must be used within a MyContextProvider');
    }
    return context;
  };



  export const ScheduleListStoreProvider: React.FC<ScheduleDataProvider> = ({ children }) => {

    const [scheduleListData, setScheduleListData] = useState<scheduleDataType>(initialData); 
  
    return (

      <ScheduleListStore.Provider value={{scheduleListData, setScheduleListData}}>
        {children}
    </ScheduleListStore.Provider>
      
      
    );
  };

 export default ScheduleListStore;
