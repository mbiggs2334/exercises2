import React from 'react';
import './NewGame.css'

const NewGame = ({renderBoard}) => {
    return(
        <button className={'NewGame'} onClick={renderBoard}>
            New Game
        </button>
    )
};

export default NewGame;