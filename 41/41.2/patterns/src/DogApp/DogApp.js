import React from 'react';
import Nav from './Nav';
import Routes from './DogRoutes';
import './DogApp.css';

const DogApp = () => {
    return (
        <div className="DogApp">
            <Nav />
            <Routes />
        </div>
    )
};

export default DogApp;