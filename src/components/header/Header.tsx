import { useTheme } from '../../styles/ThemeContext';
import { Styled } from './Styled';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/logo.png';

const Header = () => {
  const currentTheme = useTheme();

  return (
    <>
      <Styled.Wrapper $bg={currentTheme.theme['--primary']}>
        <img alt="logo" src={logo} />
        <h2>Online Bus ticket booking</h2>
        <img id="avatar" alt="avatar" src={avatar} />
      </Styled.Wrapper>
    </>
  );
};

export default Header;
