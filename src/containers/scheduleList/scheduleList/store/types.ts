export enum ActionKind {
  list = 'LIST_DATA',
}

export type ActionType = {
  type: ActionKind;
  payload: object;
};

export type ScheduleDataType = {
  data: {
    resultCount: number;
    trips: { busId: string; id: number; busType: string; totalSeats: number; seatType: string }[];
    message?: string;
    success?: boolean;
  };
};

export type ScheduleListContextType = {
  data: ScheduleDataType;
  actionList: (data: ScheduleDataType) => void;
  //rest of the dispatch functions can be listed here
};
