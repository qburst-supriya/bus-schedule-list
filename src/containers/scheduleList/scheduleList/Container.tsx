import { useEffect } from 'react';
import fetchScheduleList from './store/fetch';
import { ScheduleListProvider, ScheduleDataContext } from './store/store';
import { ScheduleDataType, ScheduleListContextType } from './store/types';
import { useCustomContext } from '../../../store/baseContext';
import ScheduleListUI from './Presentation';

const ScheduleListContainer = () => {
  return (
    <ScheduleListProvider>
      <WithData></WithData>
    </ScheduleListProvider>
  );
};

const WithData = () => {
  const { data, actionList } = useCustomContext<ScheduleListContextType>(ScheduleDataContext);

  const fetchData = async () => {
    const data = (await fetchScheduleList()) as ScheduleDataType;
    actionList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <ScheduleListUI trips={data?.data?.trips}></ScheduleListUI>;
};

export default ScheduleListContainer;
