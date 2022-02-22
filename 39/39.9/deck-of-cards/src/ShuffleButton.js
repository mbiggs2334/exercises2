import React from 'react';

const ShuffleButton = ({shuffleDeck, haveDeck}) => {

    if(haveDeck){
        return (
            <button onClick={shuffleDeck} >Shuffle Deck</button>
        )
    };
    return (
        ''
    )
};

export default ShuffleButton;