
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import styled from 'styled-components'
import { useTheme } from '../styles/ThemeContext'



const Header = () => 
  {
const currentTheme = useTheme();

    return  (
        <>
    <Styled.Wrapper bg={currentTheme.theme['--primary']}>
        <img src={logo}/>
        <h2>Online Bus ticket booking</h2>
        <img id="avatar" src={avatar}/>
    </Styled.Wrapper>
    </>
    
    )
}

export default Header


interface WrapperProps {
    bg?: string;
  }
  

const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => props.bg};
  height: 100px;
      display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    #avatar {
        height: 50px;
        padding-right: 20px
    }
`
const WrapperExtended = styled(Wrapper)`
  color: ${props => props.theme.main};
`
const Styled = {
    Wrapper,
    WrapperExtended
}




// import { withTheme } from 'styled-components'


// class MyComponent extends React.Component {
//   render() {
//     console.log('Current theme: ', this.props.theme)
//     // ...
//   }
// }


// export default withTheme(MyComponent)

// import { useContext } from 'react'
// import { ThemeContext } from 'styled-components'


// const MyComponent = () => {
//   const themeContext = useContext(ThemeContext)


//   console.log('Current theme: ', themeContext)
//   // ...
// }

// import { useTheme } from 'styled-components'


// const MyComponent = () => {
//   const theme = useTheme()


//   console.log('Current theme: ', theme)
//   // ...
// }

