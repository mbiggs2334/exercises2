import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return(
        <nav className='Nav'>
            <NavLink exact to="/">The Vending Machine</NavLink>
        </nav>
    )
};

export default Nav;