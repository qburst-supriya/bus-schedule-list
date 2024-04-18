
import '../../App.css'
import Content from '../../containers/scheduleList/ScheduleList.tsx'
import DocumentHeader from '../DocumentHeader.tsx'
import Footer from '../Footer.tsx'
import Header from '../Header.tsx'
import LeftPanel from '../LeftPanel.tsx'
import {styled} from 'styled-components'

function TwoColumnLayout() {
  return (
    < >
      <DocumentHeader titleText="Trip Listing" />
      <Header></Header>
      <Styled.Wrapper>
      <LeftPanel></LeftPanel>
      <Content></Content>
      </Styled.Wrapper>
      <Footer></Footer>
    </>
  )
}

export default TwoColumnLayout




    const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr; 
    flex: 1 1 0
`

const Styled = {
  Wrapper,
}

