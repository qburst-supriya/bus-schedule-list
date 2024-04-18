import { useCallback, useEffect } from 'react';
import { scheduleListWords } from '../../configs/constants';
import fetchScheduleList from '../../services/api/scheduleList';
import { ScheduleListStoreProvider, useScheduleListStore } from '../../store/scheduleList';
import RowItem from './RowItem';
import { styled } from 'styled-components';

interface BusDetailsProps {
  busId: string;
  id: number;
  busType: string;
  totalSeats: number;
  seatType: string;
}

const ScheduleList = () => (
  <ScheduleListStoreProvider>
    <ScheduleListWrapped></ScheduleListWrapped>
  </ScheduleListStoreProvider>
);

const ScheduleListWrapped = () => {
  const { scheduleListData, setScheduleListData } = useScheduleListStore();

  const fetchData = useCallback(async () => {
    const data = await fetchScheduleList();
    setScheduleListData(data);
  }, [setScheduleListData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Styled.Wrapper>
      <h3>{scheduleListWords.conveyance}</h3>
      <Styled.ListWrapper>
        {scheduleListData.trips.map((busDetails) => {
          const details: BusDetailsProps = {
            busId: busDetails.busId,
            id: busDetails.id,
            busType: busDetails.busType,
            totalSeats: busDetails.totalSeats,
            seatType: busDetails.seatType,
          };
          return <RowItem busDetails={busDetails} key={details.id}></RowItem>;
        })}
      </Styled.ListWrapper>
    </Styled.Wrapper>
  );
};

export default ScheduleList;

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;

  padding: 40px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Styled = {
  Wrapper,
  ListWrapper,
};
