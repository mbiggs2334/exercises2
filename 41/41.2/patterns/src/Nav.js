import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/dogs">Dog App</NavLink>
            <NavLink exact to="/colors">Color App</NavLink>
        </nav>
    )
};

export default Nav;