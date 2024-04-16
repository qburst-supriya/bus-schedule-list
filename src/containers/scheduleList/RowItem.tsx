
import { ReactNode, useState } from 'react'
import {scheduleListWords} from '../../configs/constants'
import fetchBusDetails from '../../services/api/busDetails'
import Modal from '../../components/Modal'
import  { TripDetailsContextProvider, useTripDetailsContext } from '../../store/tripDetails'
import SeatLayout from './SeatLayout'

// type BusDetails =  {
//   id: number,
//   busId: string,
//   busType: string,
//   totalSeats: number,
//   seatType: string
//  }

const RowItem = ({busDetails}:any) => 
  <TripDetailsContextProvider>
<RowItemWrapped busDetails={busDetails}></RowItemWrapped>

</TripDetailsContextProvider>



const RowItemWrapped = ({busDetails}:any) => 
{
  const { setTripDetailsData} = useTripDetailsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);


  const handleViewDetailsClick = async () =>{
    const selectedBusData = await fetchBusDetails(busDetails.id);
    setTripDetailsData(selectedBusData);
    setIsModalOpen(true)
    setContent(generateSeatLayout());
    
}

const handleCloseModal= () =>{
    setIsModalOpen(false)
    setContent(null);

}


const generateSeatLayout = (): ReactNode  =>

    <SeatLayout seatcount={busDetails.totalSeats}></SeatLayout>

    return  (
        <div key={busDetails.id} style={{border: 'solid 1px', padding: '10px'}}>
   <div style={{padding: '20px'}}> 
   
   {busDetails.busId}
   </div>
   <div style={{padding: '20px'}}> 
   
   {busDetails.busType}
   </div>
   <div style={{padding: '20px'}}> 
   
   {busDetails.totalSeats}
   {busDetails.seatType}

  
   </div>
   
   <button onClick={handleViewDetailsClick}>{scheduleListWords.viewDetails}</button>
   <Modal onClose={handleCloseModal} isModalOpen={isModalOpen} content={content} />
        </div>
       
       )
}


export default RowItem


