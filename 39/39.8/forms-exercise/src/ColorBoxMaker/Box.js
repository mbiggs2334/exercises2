import React from 'react';
import './Box.css';


const Box = ({width, height, color}) => {
    return (
        <div data-testid={color} className="Box" style={{backgroundColor: color, height: height + 'px', width: width + 'px'}}>
        </div>
    )
};

export default Box;