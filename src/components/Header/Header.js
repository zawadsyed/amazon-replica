import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='nav-link'>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Shop</a>
            </div>
        </nav>
    );
};

export default Header;