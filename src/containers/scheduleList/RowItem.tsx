import { ReactNode, useState } from 'react';
import { scheduleListWords } from '../../configs/constants';
import fetchBusDetails from '../../services/api/busDetails';
import Modal from '../../components/Modal';
import { TripDetailsContextProvider, useTripDetailsContext } from '../../store/tripDetails';
import SeatLayout from './SeatLayout';
import { useTheme } from '../../styles/ThemeContext';
import { styled } from 'styled-components';

interface BusDetailsProps {
  id: number;
  busId: string;
  busType: string;
  totalSeats: number;
  seatType: string;
}

const RowItem = ({ busDetails }: { busDetails: BusDetailsProps }) => (
  <TripDetailsContextProvider>
    <RowItemWrapped busDetails={busDetails}></RowItemWrapped>
  </TripDetailsContextProvider>
);

const RowItemWrapped = ({ busDetails }: { busDetails: BusDetailsProps }) => {
  const currentTheme = useTheme();

  const { setTripDetailsData } = useTripDetailsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const handleViewDetailsClick = async () => {
    const selectedBusData = await fetchBusDetails(busDetails.id);
    setTripDetailsData(selectedBusData);
    setIsModalOpen(true);
    setContent(generateSeatLayout());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContent(null);
  };

  const generateSeatLayout = (): ReactNode => <SeatLayout seatcount={busDetails.totalSeats}></SeatLayout>;

  return (
    <Styled.Wrapper id={busDetails.id}>
      <div>{busDetails.busId}</div>
      <div>{busDetails.busType}</div>
      <div>
        {busDetails.totalSeats}
        {busDetails.seatType}
      </div>

      <Styled.ViewButton theme={currentTheme} onClick={handleViewDetailsClick}>
        {scheduleListWords.viewDetails}
      </Styled.ViewButton>
      <Modal onClose={handleCloseModal} isModalOpen={isModalOpen} content={content} />
    </Styled.Wrapper>
  );
};

export default RowItem;

interface WrapperProps {
  id: number;
  busId?: string;
  busType?: string;
  totalSeats?: number;
  seatType?: string;
}

const Wrapper = styled.div<WrapperProps>`
  border: solid 1px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  background-color: ${(props) => (props?.id % 2 === 1 ? '#eee' : 'white')};
`;
const ViewButton = styled.button`
  border: solid 1px;
  background: rgba(102, 178, 255, 0.2);
  height: 40px;
`;

const Styled = {
  Wrapper,
  ViewButton,
};
