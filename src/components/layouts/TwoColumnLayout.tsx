import '../../App.css';
import Content from '../../containers/scheduleList/scheduleList/index.tsx';
import Footer from '../footer/Footer.tsx';
import Header from '../header/Header.tsx';
import LeftPanel from '../leftPanel/LeftPanel.tsx';
import { styled } from 'styled-components';

function TwoColumnLayout() {
  return (
    <>
      <Header></Header>
      <Styled.Wrapper>
        <LeftPanel></LeftPanel>
        <Content></Content>
      </Styled.Wrapper>
      <Footer></Footer>
    </>
  );
}

export default TwoColumnLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  flex: 1 1 0;
`;

const Styled = {
  Wrapper,
};
