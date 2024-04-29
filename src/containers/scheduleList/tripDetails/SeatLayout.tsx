import { useState } from 'react';
import SingleSeat from './SingleSeat';
import { TripDetailsContext } from './store';
import { SeatlayoutStyled } from '../Styled';
import { TripDetailsContextType } from './types';
import { useCustomContext } from '../../../store/baseContext';

type SeatLayoutProps = {
  seatcount: number;
};

const SeatLayout = ({ seatcount }: SeatLayoutProps) => {
  const { data } = useCustomContext<TripDetailsContextType>(TripDetailsContext);

  const [totalseatsSelected, setTotalseatsSelected] = useState([]);
  const eachRowEntries = Math.trunc(seatcount / 4);

  const seatsAllocation = Array.from({ length: seatcount }, (value, index) => {
    console.log(value);
    return index + 1;
  });
  const chunks: number[][] = [];

  for (let i = 0; i < seatsAllocation.length; i += eachRowEntries) {
    const arrayElement = seatsAllocation.slice(i, i + eachRowEntries);
    chunks.push(arrayElement);
  }

  const updateSeatSelection = (id: number, isSelected: boolean) => {
    if (isSelected) {
      setTotalseatsSelected((previosSelectedSeats) => {
        const selectedSeats: number[] = previosSelectedSeats;
        selectedSeats.push(id);
        return previosSelectedSeats;
      });
    } else {
      setTotalseatsSelected((previosSelectedSeats) => {
        const remainingSeats = previosSelectedSeats.filter((item) => item !== id);

        return remainingSeats;
      });
    }
  };

  const showSeatlayout = () => {
    const seats = [];
    for (let i = 0; i < chunks.length; i++) {
      for (let j = 0; j < chunks[i].length; j++) {
        if (data.data.bookings.find((item) => item.id === chunks[i][j]))
          seats.push(
            <SingleSeat
              key={chunks[i][j]}
              updateSeatCount={(id: number, isSelected: boolean) => updateSeatSelection(id, isSelected)}
              id={chunks[i][j]}
              isBooked={true}
            ></SingleSeat>,
          );
        else
          seats.push(
            <SingleSeat
              key={chunks[i][j]}
              updateSeatCount={(id: number, isSelected: boolean) => updateSeatSelection(id, isSelected)}
              id={chunks[i][j]}
              isBooked={false}
            ></SingleSeat>,
          );
      }
    }
    return seats;
  };

  return (
    <SeatlayoutStyled.Wrapper>
      <SeatlayoutStyled.Content>{showSeatlayout()}</SeatlayoutStyled.Content>

      <SeatlayoutStyled.ProceedButton
        onClick={() => alert(`Selected seat numbers are ${totalseatsSelected.join(', ')}`)}
      >
        Proceed to booking
      </SeatlayoutStyled.ProceedButton>
    </SeatlayoutStyled.Wrapper>
  );
};

export default SeatLayout;
