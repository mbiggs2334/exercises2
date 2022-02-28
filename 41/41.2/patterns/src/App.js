import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import AppRoutes from './AppRoutes';

const App = () => {
    const [color, setColor] = useState(null);
    const [showColor, setShowColor] = useState(false);

    const getColor = (newColor) => {
        setShowColor(()=>!showColor, setColor(()=>newColor.colorValue));
        
    };

    useEffect(()=> { 
        if(showColor && window.location.href.indexOf('/colors/') === -1){
            setShowColor(()=>!showColor);
        }
    }, [window.location.href]);

    return (
        <main style={showColor ? {backgroundColor: color, height: '100vh'} : null}>
            <Nav />
            <AppRoutes cFunction={getColor} />
        </main>
    )
};

export default withRouter(App);