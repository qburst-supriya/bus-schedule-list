import { useTheme } from '../styles/ThemeContext';
import { styled } from 'styled-components';

const LeftPanel = () => {
  const currentTheme = useTheme();

  return <Styled.Wrapper theme={currentTheme}>Filters</Styled.Wrapper>;
};

export default LeftPanel;

const Wrapper = styled.div`
  flex-basis: 20%;
  background-color: ${(props) => props.theme.theme['--leftPanel']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Styled = {
  Wrapper,
};
