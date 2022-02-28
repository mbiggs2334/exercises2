import React from 'react';
import { Link } from 'react-router-dom';

import './VendingMachine.css';

const VendingMachine = () => {
    return(
        <div className="VendingMachine">
            <Link exact to="/butterfinger">Butterfinger</Link>
            <Link exact to="/doritos">Doritos</Link>
            <Link exact to="/sourpatchkids">Sour Patch Kids</Link>
            <Link exact to="/beefjerky">Beef Jerky</Link>
        </div>
    )
};

export default VendingMachine;