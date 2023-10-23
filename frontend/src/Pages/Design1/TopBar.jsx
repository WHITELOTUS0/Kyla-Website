
import { NavLink} from 'react-router-dom'
import { useState } from 'react'
import '../../App.css'

function TopBar() {

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className='navbar'>
    <div className='container'>
        <div className='logo'>
            <img src='' alt='No image..'/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
                <li><NavLink to='/index'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/quiz'>Student Match Quiz</NavLink></li>
                {/* <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/login'>Log in</NavLink></li> */}
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default TopBar