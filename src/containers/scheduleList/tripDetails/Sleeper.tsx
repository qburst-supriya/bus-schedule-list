import SingleSeat from './SingleSeat';
import { TripDetailsContext } from './store/store';
import { TripDetailsContextType } from './store/types';
import { useCustomContext } from '../../../store/baseContext';
import { SeatTypes } from './uiTypes';

type SeatLayoutProps = {
  seatcount: number;
  setTotalselectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
};

const Sleeper = ({ seatcount, setTotalselectedSeats }: SeatLayoutProps) => {
  const { data } = useCustomContext<TripDetailsContextType>(TripDetailsContext);

  const column = Math.trunc(seatcount / 3);
  const row = 3;

  const updateSeatSelection = (id: number, isBooked: boolean) => {
    if (isBooked) {
      setTotalselectedSeats((previosSelectedSeats: number[]) => {
        const selectedSeats: number[] = previosSelectedSeats;
        selectedSeats.push(id);
        return selectedSeats;
      });
    } else {
      setTotalselectedSeats((previosSelectedSeats: number[]) =>
        previosSelectedSeats.filter((item: number) => item !== id),
      );
    }
  };

  const showSeatlayout = () => {
    const seats = [];
    let seatNumber = 0;
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        seatNumber++;

        const isBooked = data.data.bookings.find((item) => item.id === seatNumber) ? true : false;

        seats.push(
          <SingleSeat
            type={SeatTypes.SLEEPER}
            onClick={(id: number, isBooked: boolean) => updateSeatSelection(id, isBooked)}
            seatNumber={seatNumber}
            key={seatNumber}
            isBooked={isBooked}
          ></SingleSeat>,
        );
      }
    }
    return seats;
  };
  return showSeatlayout();
};

export default Sleeper;
