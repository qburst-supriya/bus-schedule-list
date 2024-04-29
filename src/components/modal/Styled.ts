import { styled } from 'styled-components';

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
export const Styled = {
  Wrapper,
  ModalContent,
  ModalHeader,
};
