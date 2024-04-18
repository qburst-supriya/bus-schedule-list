import React, { ReactNode, useContext, useState } from 'react';

type tripDetailsDataType = {
  bookings: { id: number; busId: string; busType: string; totalSeats: number; seatType: string }[];
  message: string;
  success: boolean;
};

interface TripDetailsContextInterface {
  tripDetailsData: tripDetailsDataType;
  setTripDetailsData: React.Dispatch<React.SetStateAction<tripDetailsDataType>>;
}

const initialData = {
  bookings: [],
  message: '',
  success: false,
};

const TripDetailsContext = React.createContext<TripDetailsContextInterface | undefined>(undefined);
TripDetailsContext.displayName = 'TripDetailsContext';

export const useTripDetailsContext = () => {
  const context = useContext(TripDetailsContext);
  if (!context) {
    throw new Error('useCustomContext must be used within a MyContextProvider');
  }
  return context;
};

type BusDetailsProvider = {
  children: ReactNode;
};

export const TripDetailsContextProvider: React.FC<BusDetailsProvider> = ({ children }) => {
  const [tripDetailsData, setTripDetailsData] = useState<tripDetailsDataType>(initialData);

  return (
    <TripDetailsContext.Provider value={{ tripDetailsData, setTripDetailsData }}>
      {children}
    </TripDetailsContext.Provider>
  );
};

export default TripDetailsContext;
