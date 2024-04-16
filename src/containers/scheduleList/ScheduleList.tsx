
import { useCallback,  useEffect } from 'react'
import {scheduleListWords} from '../../configs/constants'
import fetchScheduleList from '../../services/api/scheduleList'
import  { ScheduleListStoreProvider, useScheduleListStore } from '../../store/scheduleList'
import RowItem from './RowItem'


const ScheduleList = () => 
  <ScheduleListStoreProvider>
<ScheduleListWrapped></ScheduleListWrapped>

</ScheduleListStoreProvider>



const ScheduleListWrapped = () => 
{
  const { scheduleListData, setScheduleListData} = useScheduleListStore();

 
  const fetchData = useCallback(async()=> {
    const data = await fetchScheduleList();
    setScheduleListData(data)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);


    return  (
        <>
    <div style={{minHeight: '500px', backgroundColor: 'yellow', flex: 2, display: 'grid'}}>
    <h2>{scheduleListWords.conveyance}</h2> 

     {
      scheduleListData.trips.map((busDetails: any)=>
      <RowItem busDetails={busDetails}></RowItem>
      )
     } 
    </div>
    </>
    )
}


export default ScheduleList

