import { useTheme } from '../../styles/ThemeContext';
import { Styled } from './Styled';

const LeftPanel = () => {
  const currentTheme = useTheme();

  return <Styled.Wrapper theme={currentTheme}>Filters</Styled.Wrapper>;
};

export default LeftPanel;
