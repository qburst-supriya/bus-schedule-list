

import { useState } from 'react';
import SingleSeat from './SingleSeat'
import { useTripDetailsContext } from '../../store/tripDetails';



const SeatLayout = ({seatcount}: any) => 
{
  const { tripDetailsData} = useTripDetailsContext();

const [totalseatsSelected, setTotalseatsSelected] = useState([]);
    const eachRowEntries = Math.trunc(seatcount/4);

    const seatsAllocation = Array.from({ length: seatcount }, (value, index) => { console.log(value); return index+1})
    let chunks: number[][] = [];
    
    for (let i = 0; i < seatsAllocation.length; i += eachRowEntries) {
      const arrayElement = seatsAllocation.slice(i, i + eachRowEntries);
        chunks.push(arrayElement);
    }

    const updateSeatSelection = (id: number, isSelected: boolean) =>{

      if (isSelected) {
        setTotalseatsSelected( (previosSelectedSeats)=> {
          let selectedSeats: number[] = previosSelectedSeats;
          selectedSeats.push(id)
        return previosSelectedSeats
        });
    } else {
      setTotalseatsSelected((previosSelectedSeats)=> {
        
       let remainingSeats =  previosSelectedSeats.filter((item) => item !== id)
      
      return remainingSeats
      })
    }

     
    }

   const showSeatlayout= () => {
    const seats = [];
    for (let i = 0; i < chunks.length; i++) {
      for (let j = 0; j < chunks[i].length; j++) {   
       if ( tripDetailsData.bookings.find((item): any => item.id === chunks[i][j]))
        seats.push( <SingleSeat updateSeatCount={(id: number, isSelected: boolean)=>updateSeatSelection(id, isSelected)} id={chunks[i][j]} isBooked = {true}></SingleSeat>);
        else 
        seats.push( <SingleSeat updateSeatCount={(id:number, isSelected: boolean)=>updateSeatSelection(id, isSelected)} id={chunks[i][j]} isBooked = {false}></SingleSeat>);
      }

  }
  return seats
   }



    return  (
     <div style={{ flexWrap: 'wrap', width: '513px'}} >
     <div style={{ flexWrap: 'wrap'}}>
{
    
  showSeatlayout()
    
    
    }
    </div>

  
   
   
  
    <button style={{margin: '30px'}} onClick={()=> alert(`Selected seat numbers are ${totalseatsSelected.join(', ')}`)}>Proceed to booking</button>

  
  </div>  
    
    )
}



export default SeatLayout

