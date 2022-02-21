import React from 'react';
import './ResetBoardButton.css';

const ResetBoardButton = ({ startBoard, message }) => {
    return (
        <button onClick={startBoard} className="ResetBoardButton">{message}</button>
    )
};

export default ResetBoardButton;