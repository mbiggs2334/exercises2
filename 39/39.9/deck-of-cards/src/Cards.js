import React, { useState } from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import Card from './Card';
import DrawCardButton from './DrawCardButton';
import ShuffleButton from './ShuffleButton';
import ContinuousDraw from './ContinuousDraw';
import NewDeck from './NewDeck';

const Cards = () => {
    const INITIAL_STATE = {
        deckId: null,
        cards: []
    };

    const [deck, setDeck] = useState(INITIAL_STATE);
    const [haveDeck, setHaveDeck] = useState(false);

    async function getCard(){
        if(!haveDeck){
            try {
                const res = await axios.get('https://deckofcardsapi.com/api/deck/new/');
                setDeck({...deck, deckId: res.data.deck_id}, setHaveDeck(true));
            } catch(e) {
                throw new Error(e);
            };
        } else {
            if(deck.cards.length === 52){
                setDeck(INITIAL_STATE, setHaveDeck(false));
            } else {
                try{
                    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck.deckId}/draw/?count=1`);
                    setDeck({...deck, cards: [...deck.cards, res.data.cards[0]]});
                } catch(e) {
                    throw new Error(e);
                };
            };
        };
    };

    const shuffleDeck = () => {
        try {
            axios.get(`https://deckofcardsapi.com/api/deck/${deck.deckId}/shuffle/?remaining=true`)
        } catch(e) {
            throw new Error(e);
        };
    };

    const newDeck = () =>{
        setDeck(INITIAL_STATE, setHaveDeck(false));
    };

    console.log(deck);

    return (
        <div className="Cards">
            <div className="Cards-buttons">
                <DrawCardButton getCard={getCard} haveDeck={haveDeck} />
                <ShuffleButton haveDeck={haveDeck} shuffleDeck={shuffleDeck} />
                <ContinuousDraw haveDeck={haveDeck} getCard={getCard} />
                <NewDeck haveDeck={haveDeck} newDeck={newDeck} />
            </div>
            <div className="Cards-cards">
                {deck.cards.map(card => <Card key={uuid()} src={card.image} />)}
            </div>
        </div>
    )
};

export default Cards;