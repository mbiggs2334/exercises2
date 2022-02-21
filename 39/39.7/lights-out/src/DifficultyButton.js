import React from 'react';
import './DifficultyButton.css';

const DifficultyButton = ({ diff, changeDiff }) => {
    return (
        <button onClick={changeDiff} className="DifficultyButton">{diff}</button>
    )
};

export default DifficultyButton;