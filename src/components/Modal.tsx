
import close from '../assets/close.png'




const Modal = ({ onClose, content, isModalOpen }: { onClose: ()=> void, content: any, isModalOpen: boolean })=> {
  
  
    return (
        <>
      <div style={isModalOpen ? { zIndex: '1000', position: 'fixed',
        top: '25%',
        left: '32%',
        width: '34%',
        height: '50%', display: 'grid', backgroundColor: '#cccccc', textAlign: 'center'}: {display: 'none'}}>
            <div style={{flexWrap: 'wrap'}}>
        <h2 style={{marginRight: '30px'}}>Modal Content</h2>
        <img src={close} onClick={()=>onClose()} />
        </div>
        {content}      
      </div>
      </>
    );
  }

  export default Modal;