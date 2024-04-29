import RowItem from './RowItem';
import { ScheduledListStyled } from '../Styled';
import { TripDetailsType } from '../tripDetails/types';
type PropsType = {
  trips: TripDetailsType[] | [];
};

const ScheduleListUI = ({ trips }: PropsType) => {
  return (
    <ScheduledListStyled.ListWrapper>
      {trips.map((tripDetails: TripDetailsType) => {
        return <RowItem busDetails={tripDetails} key={tripDetails.id}></RowItem>;
      })}
    </ScheduledListStyled.ListWrapper>
  );
};

export default ScheduleListUI;
