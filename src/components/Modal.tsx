import close from '../assets/close.png';

import { styled } from 'styled-components';
import { useTheme } from '../styles/ThemeContext';
import { ReactNode } from 'react';

const Modal = ({
  onClose,
  content,
  isModalOpen,
}: {
  onClose: () => void;
  content: ReactNode;
  isModalOpen: boolean;
}) => {
  const currentTheme = useTheme();
  return (
    <Styled.Wrapper $isModalOpen={isModalOpen}>
      <Styled.ModalContent theme={currentTheme}>
        <Styled.ModalHeader>
          <img src={close} onClick={() => onClose()} alt="close" role="presentation" onKeyDown={() => onClose()} />
          <h2>Seat Layout</h2>
        </Styled.ModalHeader>
        {content}
      </Styled.ModalContent>
    </Styled.Wrapper>
  );
};

export default Modal;

interface WrapperProps {
  $isModalOpen: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: ${(props) => (props.$isModalOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalContent = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme.theme['--primary']};
  padding: 30px;
`;
const ModalHeader = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  align-items: flex-end;
  img {
    height: 30px;
    width: 30px;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin-right: 0px;
  }
`;
const Styled = {
  Wrapper,
  ModalContent,
  ModalHeader,
};
