import { useState } from 'react';
import seat from '../../../assets/seat.png';
import seatSelected from '../../../assets/seatSelected.png';
import seatBooked from '../../../assets/seatBooked.png';

type SingleSeatProps = {
  updateSeatCount: (_id: number, _isSelected: boolean) => void;
  isBooked: boolean;
  id: number;
};

const SingleSeat = ({ updateSeatCount, isBooked, id }: SingleSeatProps) => {
  const [url, setUrl] = useState(seat);
  const handleOnclick = () => {
    if (!isBooked) {
      const previousSelection = url === seatSelected;
      if (previousSelection) {
        updateSeatCount(id, false);
        setUrl(seat);
      } else {
        updateSeatCount(id, true);
        setUrl(seatSelected);
      }
    }
  };
  return <img alt="seats" src={isBooked ? seatBooked : url} onClick={handleOnclick} key={id} role="presentation" />;
};

export default SingleSeat;
