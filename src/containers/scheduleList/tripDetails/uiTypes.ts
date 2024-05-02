import normalIcon from '../../../assets/seat.png';
import selectedIcon from '../../../assets/seatSelected.png';
import bookedIcon from '../../../assets/seatBooked.png';

export enum SeatTypes {
  SLEEPER = 'SLEEPER',
}

export const seatIcons = {
  SLEEPER: { normalIcon, selectedIcon, bookedIcon },
};
