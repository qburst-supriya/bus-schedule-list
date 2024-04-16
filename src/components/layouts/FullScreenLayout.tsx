
import '../../App.css'
import Content from '../../containers/scheduleList/ScheduleList.tsx'
import DocumentHeader from '../DocumentHeader.tsx'
import Footer from '../Footer.tsx'
import Header from '../Header.tsx'

function FullScreen() {

  return (
    < >
      <DocumentHeader titleText="FullScreen" />
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default FullScreen
