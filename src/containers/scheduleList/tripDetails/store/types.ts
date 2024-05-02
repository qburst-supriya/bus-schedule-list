export type TripDetailsType = {
  busId: string;
  id: number;
  busType: string;
  totalSeats: number;
  seatType: string;
};

export enum ActionKind {
  fetch = 'FETCH_DATA',
}

export type ActionType = {
  type: ActionKind;
  payload: object;
};
export type TripDetailsDataType = {
  data: {
    bookings: { id: number; busId: string; busType: string; totalSeats: number; seatType: string }[];
    message: string;
    success: boolean;
  };
};
export type TripDetailsContextType = {
  data: TripDetailsDataType;
  actionList: (data: TripDetailsDataType) => void;
};
