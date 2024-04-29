import { styled } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.theme['--primary']};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Wrapper,
};
