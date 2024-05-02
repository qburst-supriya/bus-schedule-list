import { styled } from 'styled-components';

interface WrapperProps {
  $bg?: string;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${(props) => props.$bg};
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  #avatar {
    height: 50px;
    padding-right: 20px;
  }
`;
const WrapperExtended = styled(Wrapper)`
  color: ${(props) => props.theme.main};
`;
export const Styled = {
  Wrapper,
  WrapperExtended,
};
