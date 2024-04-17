
import { useCallback,  useEffect } from 'react'
import {scheduleListWords} from '../../configs/constants'
import fetchScheduleList from '../../services/api/scheduleList'
import  { ScheduleListStoreProvider, useScheduleListStore } from '../../store/scheduleList'
import RowItem from './RowItem'
import styled from 'styled-components'


 
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
       <Styled.Wrapper >
    <h3>{scheduleListWords.conveyance}</h3> 
<Styled.ListWrapper>
     {
      scheduleListData.trips.map((busDetails)=>
     {
       return <RowItem busDetails={busDetails}></RowItem>}
      )
     } 
     </Styled.ListWrapper>
   </Styled.Wrapper>
    )
}


export default ScheduleList



const Wrapper = styled.div`
 flex: 2; display: flex;
flex-direction: column;

padding: 40px;

`
const ListWrapper = styled.div`
 display: flex;
 flex-direction: column

`

const Styled = {
  Wrapper,
  ListWrapper
}

