import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cell from './Cell';
import DifficultyButton from './DifficultyButton';
import ResetBoardButton from './ResetBoardButton';
import YouWin from './YouWin';
import './Board.css';

const Board = ({rows=10, cols=15,}) => {

    const changeDiff = (e) => {
        let text = e.target.innerText;
        if(text === 'Easy'){
            setDiff(() => 7);
        };
        if(text === 'Medium'){
            setDiff(() => 4);
        };
        if(text === 'Hard'){
            setDiff(() => 2);
        };
        setBoardDiff(text);
    }

    const lightToggle = (e) => {
        let row = parseInt(e.target.dataset.row);
        let col = parseInt(e.target.dataset.col);
        board[row][col] = (!board[row][col]);
        if(row !== 0) board[row - 1][col] = (!board[row - 1][col]);
        if(row !== rows - 1) board[row + 1][col] = (!board[row + 1][col]);
        if(col !== 0) board[row][col - 1] = (!board[row][col - 1]);
        if(col !== cols - 1) board[row][col + 1] = (!board[row][col + 1]);
        
        setBoard(Array.from(board));
        checkBoard();
    };

    const setBoardValues = () => {
        let num = Math.floor(Math.random() * diff ) + 1;
        if(num === 1){
            return true;
        } else {
            return false;
        };
    };

    const startBoard = () => {
        setBoard(board => 
            Array.from({length: rows}).map(array => (
            Array.from({length: cols}).map(bool =>{
                return setBoardValues();
            })
        )))
        setBoardVis(true);
    };

    const [board, setBoard ] = useState([]);
    const [diff, setDiff] = useState(4);
    const [boardDiff, setBoardDiff] = useState('Medium');
    const [boardVis, setBoardVis] = useState(false);

    const checkBoard = () => {
        let gameOver = true;
        for(let row of board){
            for(let col of row){
                if(col){
                    gameOver = false;
                }
            };
        };
        if(gameOver){
            ReactDOM.render(<YouWin />, document.getElementById('root'));
        };
    };
 
    return (
        <>
            <div className="Board-buttons">
                <DifficultyButton diff="Easy" changeDiff={changeDiff}  />
                <DifficultyButton diff="Medium" changeDiff={changeDiff}/>
                <DifficultyButton diff="Hard" changeDiff={changeDiff} />
            </div>
            <div className="Board-diff">
                Board Difficulty: {boardDiff}
            </div>
            <ResetBoardButton 
                startBoard={startBoard}
                message={boardVis ? 'Reset' : 'Start'} 
            />
            <div className="Board">
                {board.map((arr,arryIdx) => {
                    return (
                        <div className='Board-row'>
                            {arr.map((bool, boolIdx) => (
                                <Cell turnOff={lightToggle} rowIdx={arryIdx} colIdx={boolIdx} value={bool}/>
                            ))}
                        </div>
                    ) 
                })}
            </div>
        </>
    )
};

export default Board;