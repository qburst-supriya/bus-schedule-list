import { styled } from 'styled-components';
import { useTheme } from '../styles/ThemeContext';

const Footer = () => {
  const currentTheme = useTheme();

  return (
    <>
      <Styled.Wrapper theme={currentTheme}>Copy right</Styled.Wrapper>
    </>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.theme['--primary']};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Styled = {
  Wrapper,
};
