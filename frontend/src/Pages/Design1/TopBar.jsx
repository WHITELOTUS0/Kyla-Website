
import { NavLink} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import logo from "../../assets/aka_logo.png"
import '../../App.css'

function TopBar() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/login');
    window.location.reload();
  };
   
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <nav className='navbar'>
    <div className='container'>
        <div className='logo'>
            <img src={logo} alt=''/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
                <li><NavLink to='/index'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/quiz'>Student Match Quiz</NavLink></li>
                <li><button><NavLink to='/'>Register</NavLink></button></li>
                <li><button><NavLink to='/login'>Log in</NavLink></button></li>
                
            </ul>
        </div>
        <div className='user'>
        {/* <span><WavingHandIcon/></span> */}
        {/* <h4>Hello <i>{user.firstName}</i></h4> */}
        </div>
       
        <div className='logOut' >
        <LogoutIcon onClick={handleLogOut}/>
        </div>
    </div>
    </nav>
  )
}

export default TopBar