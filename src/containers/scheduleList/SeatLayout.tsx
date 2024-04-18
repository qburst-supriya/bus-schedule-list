import { useState } from 'react';
import SingleSeat from './SingleSeat';
import { useTripDetailsContext } from '../../store/tripDetails';
import { styled } from 'styled-components';

type SeatLayoutProps = {
  seatcount: number;
};

const SeatLayout = ({ seatcount }: SeatLayoutProps) => {
  const { tripDetailsData } = useTripDetailsContext();

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
        if (tripDetailsData.bookings.find((item) => item.id === chunks[i][j]))
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
    <Styled.Wrapper>
      <Styled.Content>{showSeatlayout()}</Styled.Content>

      <Styled.ProceedButton onClick={() => alert(`Selected seat numbers are ${totalseatsSelected.join(', ')}`)}>
        Proceed to booking
      </Styled.ProceedButton>
    </Styled.Wrapper>
  );
};

export default SeatLayout;

const Wrapper = styled.div`
  width: 513px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Content = styled.div``;
const ProceedButton = styled.button`
  margin: 30px;
`;

const Styled = {
  Wrapper,
  Content,
  ProceedButton,
};
