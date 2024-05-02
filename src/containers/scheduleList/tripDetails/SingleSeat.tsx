import { useState } from 'react';
import { seatIcons, SeatTypes } from './uiTypes';

export type singleSeatPropType = {
  type: SeatTypes;
  seatNumber: number;
  isBooked: boolean;
  onClick: (_id: number, _isSelected: boolean) => void;
};

const SingleSeat = ({ type, seatNumber, isBooked, onClick: onClickFromParent }: singleSeatPropType) => {
  const icons = seatIcons[type];
  const [url, setUrl] = useState(isBooked ? icons.bookedIcon : icons.normalIcon);
  const [isSelected, setSelected] = useState(false);
  const name = `seat${seatNumber}`;
  const handleOnclick = () => {
    if (!isBooked) {
      if (isSelected) {
        onClickFromParent(seatNumber, false);
        setUrl(icons.normalIcon);
        setSelected(false);
      } else onClickFromParent(seatNumber, true);
      setUrl(icons.selectedIcon);
      setSelected(true);
    }
  };
  return <img alt={name} src={url} onClick={handleOnclick} key={seatNumber} role="presentation" />;
};

export default SingleSeat;
