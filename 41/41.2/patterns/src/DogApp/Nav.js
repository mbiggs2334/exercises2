import React from 'react';
import { v4 as uuid } from 'uuid';
import { NavLink } from 'react-router-dom';
import dogs from './Dogs';
import './Nav.css';

const Nav = () => {

    return (
        <div className="DogNav">
            {dogs.map(dog => <NavLink key={uuid()} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
        </div>
    )
};

export default Nav;