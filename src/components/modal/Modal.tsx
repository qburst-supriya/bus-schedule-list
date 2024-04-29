import close from '../../assets/close.png';

import { useTheme } from '../../styles/ThemeContext';
import { ReactNode } from 'react';
import { Styled } from './Styled';

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
