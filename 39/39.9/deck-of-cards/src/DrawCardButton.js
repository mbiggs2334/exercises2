import React from 'react';

const DrawCardButton = ({getCard, haveDeck}) => {

    return (
        <button onClick={getCard}>{haveDeck ? 'Draw Card' : 'New Deck'}</button>
    )
};

export default DrawCardButton;