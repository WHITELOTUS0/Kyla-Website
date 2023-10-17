import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../path-to-logo.png'; // update the path to your logo file

function NavBar() {
    return (
        <nav>
            <img src={logo} alt="School Logo" className="logo"/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/quiz">Match Quiz</Link></li>
                <li><Link to="/login">Sign Up/Login</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
