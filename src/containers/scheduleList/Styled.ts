import { styled } from 'styled-components';

const generateScheduledListStyle = () => {
  const Wrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;

    padding: 40px;
  `;
  const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return {
    Wrapper,
    ListWrapper,
  };
};

export const ScheduledListStyled = generateScheduledListStyle();

const generateSeatlayoutStyle = () => {
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

  return {
    Wrapper,
    Content,
    ProceedButton,
  };
};

export const SeatlayoutStyled = generateSeatlayoutStyle();

const generateRowItemStyle = () => {
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

  return {
    Wrapper,
    ViewButton,
  };
};

export const RowItemStyled = generateRowItemStyle();
