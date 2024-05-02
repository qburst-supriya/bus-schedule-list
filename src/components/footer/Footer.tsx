import { useTheme } from '../../styles/ThemeContext';
import { footerWords } from '../../configs/wordings';
import { Styled } from './Styled';

const Footer = () => {
  const currentTheme = useTheme();

  return (
    <>
      <Styled.Wrapper theme={currentTheme}>{footerWords.copyRight}</Styled.Wrapper>
    </>
  );
};

export default Footer;
