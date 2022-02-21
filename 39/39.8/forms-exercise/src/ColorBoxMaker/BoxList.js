import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid } from 'uuid';
import './BoxList.css';

const BoxList = () => {

    const [boxes, setBoxes] = useState([]);

    const addBox = ({height, width, color}) => {
        setBoxes([...boxes, {height, width, color}]);
    };

    return (
        <div className={'BoxList'}>
            <NewBoxForm addBox={addBox} />
            <div className={'BoxList-boxes'}>
                {boxes.map(({height, width, color}) => 
                    <Box key={uuid()} width={width} height={height} color={color} />
                )}

            </div>
        </div>
    )
};

export default BoxList;