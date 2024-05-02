import { ScheduledListStyled } from '../Styled';
import { scheduleListWords } from '../../../configs/wordings';
import ScheduleListContainer from './Container';

const Index = () => {
  return (
    <ScheduledListStyled.Wrapper>
      <h3>{scheduleListWords.conveyance}</h3>
      <ScheduleListContainer></ScheduleListContainer>
    </ScheduledListStyled.Wrapper>
  );
};

export default Index;
