import { useState } from 'react';
import { SeatlayoutStyled } from '../Styled';
import { SeatTypes } from './uiTypes';
import Sleeper from './Sleeper';

type SeatLayoutProps = {
  seatcount: number;
  layout: SeatTypes;
};

const SeatLayout = ({ seatcount, layout }: SeatLayoutProps) => {
  const [totalseatsSelected, setTotalseatsSelected] = useState<number[] | []>([]);

  return (
    <SeatlayoutStyled.Wrapper>
      <SeatlayoutStyled.Content>
        <DisplayLayout
          seatcount={seatcount}
          layout={layout}
          setTotalselectedSeats={setTotalseatsSelected}
        ></DisplayLayout>
      </SeatlayoutStyled.Content>

      <SeatlayoutStyled.ProceedButton
        onClick={() => alert(`Selected seat numbers are ${totalseatsSelected.join(', ')}`)}
      >
        Proceed to booking
      </SeatlayoutStyled.ProceedButton>
    </SeatlayoutStyled.Wrapper>
  );
};

export default SeatLayout;

type DisplayLayoutType = {
  seatcount: number;
  layout: SeatTypes;
  setTotalselectedSeats: React.Dispatch<React.SetStateAction<number[]>>;
};

const DisplayLayout = ({ seatcount, layout, setTotalselectedSeats }: DisplayLayoutType) => {
  switch (layout) {
    case SeatTypes.SLEEPER:
      return <Sleeper seatcount={seatcount} setTotalselectedSeats={setTotalselectedSeats}></Sleeper>;

    default:
      break;
  }
};
