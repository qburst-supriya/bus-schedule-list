import '../../App.css';
import Content from '../../containers/scheduleList/scheduleList/Container.tsx';
import Footer from '../footer/Footer.tsx';
import Header from '../header/Header.tsx';

function FullScreen() {
  return (
    <>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </>
  );
}

export default FullScreen;
