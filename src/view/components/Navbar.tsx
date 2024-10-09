import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarStyle.css';


const NavBar: React.FC = () => {
   
    const mrShopperLogo = require('../../../src/logo.jpg');
    
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className='navbar-logo'>
                    <img src={mrShopperLogo} alt='Logo'/>
                    <Link to="/" className='navbar-logo-title'>Mr. Shopper</Link>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/" className="navbar-link">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/impressum" className="navbar-link">Impressum</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
