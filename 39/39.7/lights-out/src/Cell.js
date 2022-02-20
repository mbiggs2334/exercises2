import React from 'react';
import './Cell.css'

const Cell = ({value, turnOff, rowIdx, colIdx}) => {
    return (
        <div 
        onClick={value ? turnOff : null} 
        className={`${value ? 'Cell-on' : 'Cell-off'}`}
        data-row={rowIdx}
        data-col={colIdx}
        >
        </div>
    )
};

export default Cell;