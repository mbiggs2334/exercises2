import React from 'react';
import ReactDOM from 'react-dom';
import './YouWin.css'
import Board from './Board';
import NewGame from './NewGame';

const YouWin = ({startFunc}) => {
    const renderBoard = () => {
        ReactDOM.render(<Board rows={10} cols={15} />, document.getElementById('root'));
    }
    return (
        <div className='YouWin'>
            <h1>Congrats!</h1>
            <h2>You win!</h2>
            <NewGame renderBoard={renderBoard} />
        </div>
    )
};

export default YouWin;
