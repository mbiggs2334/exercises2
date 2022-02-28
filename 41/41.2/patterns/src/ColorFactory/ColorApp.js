import React from 'react';
import ColorForm from './ColorForm';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

import './ColorApp.css';

const ColorApp = ({addColor, colors, getColor}) => {
    let color;
    
    const findColor = (e) =>{
        for(let i = 0; i < colors.length; i++){
            if(colors[i].colorName === e.target.innerText){
                color = colors[i];
            };
        };
    };

    const handleClick = (e) => {
        findColor(e);
        getColor(color);
    }

    return (
        <div className="ColorApp">
            <ColorForm addColor={addColor} />
            <hr />
            {colors.map(color => (
                <div key={uuid()}>
                    <Link onClick={handleClick} to={`/colors/${color.colorName}`}>{color.colorName}</Link>
                </div>
            ))}
        </div>
    )
};

export default ColorApp;