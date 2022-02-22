import React from 'react';

const NewDeck = ({haveDeck, newDeck}) => {

    if(haveDeck){
        return (
            <button onClick={newDeck}>New Deck</button>
        )
    };
    return (
        ''
    )
    
};

export default NewDeck;