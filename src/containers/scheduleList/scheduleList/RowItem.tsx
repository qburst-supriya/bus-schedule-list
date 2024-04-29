import { ReactNode, useState } from 'react';
import { scheduleListWords } from '../../../configs/wordings';
import fetchBusDetails from '../tripDetails/fetch';
import Modal from '../../../components/modal/Modal';
import { TripDetailsContext, TripDetailsProvider } from '../tripDetails/store';
import SeatLayout from '../tripDetails/SeatLayout';
import { useTheme } from '../../../styles/ThemeContext';
import { RowItemStyled } from '../Styled';
import { useCustomContext } from '../../../store/baseContext';
import { TripDetailsContextType } from '../tripDetails/types';

type BusDetailsProps = {
  id: number;
  busId: string;
  busType: string;
  totalSeats: number;
  seatType: string;
};

const RowItem = ({ busDetails }: { busDetails: BusDetailsProps }) => (
  <TripDetailsProvider>
    <RowItemWrapped busDetails={busDetails}></RowItemWrapped>
  </TripDetailsProvider>
);

const RowItemWrapped = ({ busDetails }: { busDetails: BusDetailsProps }) => {
  const currentTheme = useTheme();
  const { actionList } = useCustomContext<TripDetailsContextType>(TripDetailsContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const handleViewDetailsClick = async () => {
    const selectedBusData = await fetchBusDetails(busDetails.id);
    actionList(selectedBusData);
    setIsModalOpen(true);
    setContent(generateSeatLayout());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContent(null);
  };

  const generateSeatLayout = (): ReactNode => <SeatLayout seatcount={busDetails.totalSeats}></SeatLayout>;

  return (
    <RowItemStyled.Wrapper id={busDetails.id}>
      <div>{busDetails.busId}</div>
      <div>{busDetails.busType}</div>
      <div>
        {busDetails.totalSeats}
        {busDetails.seatType}
      </div>

      <RowItemStyled.ViewButton theme={currentTheme} onClick={handleViewDetailsClick}>
        {scheduleListWords.viewDetails}
      </RowItemStyled.ViewButton>
      <Modal onClose={handleCloseModal} isModalOpen={isModalOpen} content={content} />
    </RowItemStyled.Wrapper>
  );
};

export default RowItem;
