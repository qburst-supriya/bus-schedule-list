


import { useState } from 'react'
import seat from '../../assets/seat.png'
import seatSelected from '../../assets/seatSelected.png'
import seatBooked from '../../assets/seatBooked.png'



const SingleSeat = ({updateSeatCount, isBooked, id}: {updateSeatCount: (id: number, isBooked: boolean)=> void, isBooked: boolean, id: number}) => {
    const [url, setUrl] = useState(seat);
    const handleOnclick = ()=> {
        if (!isBooked) {
        const previousSelection = url === seatSelected;
        if (previousSelection) {
            updateSeatCount(id, false);
            setUrl(seat)
        } else {
            updateSeatCount(id, true)
            setUrl(seatSelected)
        }
    }
    };
    return (  <img src={isBooked ? seatBooked : url} onClick={handleOnclick} key ={id}/>)      
        
    
}


export default SingleSeat

