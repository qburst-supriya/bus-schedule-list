
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'



const Header = () => 

  {
    return  (
        <>
    <div style={{height: '100px', backgroundColor: 'red', flexBasis: '100%'}}>
        <img src={logo}/>
        <span>Online Bus ticket booking</span>
        <img src={avatar}/>
    </div>
    </>
    
    )
}

export default Header



