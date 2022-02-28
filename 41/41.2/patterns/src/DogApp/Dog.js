import React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import dogs from './Dogs';
import './Dog.css';

import Nav from './Nav';

const Dog = () => {
    const {name} = useParams();
    let dog;
    
    const findDog = () =>{
        for(let i = 0; i < dogs.length; i++){
            if(dogs[i].name === name){
                dog = dogs[i];
            };
        };
    };

    findDog();
    return (
        <div className="Dog">
            <Nav />
            <img
                src={require(`./dogs/${dog.name}.jpg`)} 
                alt={`${dog.name}`}
            />
            <ul>
                {dog.facts.map(fact => <li key={uuid()}>{fact}</li>)}
            </ul>
        </div>
    )
};

export default Dog;