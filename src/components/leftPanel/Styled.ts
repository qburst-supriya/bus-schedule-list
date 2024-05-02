import { styled } from 'styled-components';

const Wrapper = styled.div`
  flex-basis: 20%;
  background-color: ${(props) => props.theme.theme['--leftPanel']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Styled = {
  Wrapper,
};
