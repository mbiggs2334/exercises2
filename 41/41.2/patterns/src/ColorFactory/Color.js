import React from 'react';
import { useParams } from 'react-router-dom';
import './Color.css';

const Color = () => {
    const {color} = useParams();

    const handleClick = () => {
        window.history.back();
    };

    return (
        <div className="Color">
            <h1>{color}</h1>
            <h2>So Pretty!</h2>
            <button onClick={handleClick}>Go Back</button>
        </div>
    )
};

export default Color;