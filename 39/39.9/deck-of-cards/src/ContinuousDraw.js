import React, { useState, useRef } from 'react';

const ContinuousDraw = ({haveDeck, getCard}) => {

    const intervalId = useRef();

    const [drawing, setDrawing] = useState(false);

    const contDraw = () => {
        if(drawing){
            clearInterval(intervalId.current);
            setDrawing(false);
        } else {
            intervalId.current = setInterval(()=>{
                getCard();
            }, 1000);
            setDrawing(true);
        };
    };

    if(haveDeck){
        return (
            <button onClick={contDraw}>{drawing ? 'Stop Drawing' : 'Draw All'}</button>
        )
    };
    return (
        ''
    )
};

export default ContinuousDraw;