import React from 'react';
import './StartButton.css';

const StartButton = ({ startBoard }) => {
    return (
        <>
            <button className={'StartButton'} onClick={startBoard}>Start</button>
        </>
    )
};

export default StartButton;