
import '../../App.css'
import Content from '../../containers/scheduleList/ScheduleList.tsx'
import DocumentHeader from '../DocumentHeader.tsx'
import Footer from '../Footer.tsx'
import Header from '../Header.tsx'
import LeftPanel from '../LeftPanel.tsx'

function TwoColumnLayout() {
  return (
    < >
      <DocumentHeader titleText="Trip Listing" />
      <Header></Header>
      <LeftPanel></LeftPanel>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default TwoColumnLayout
