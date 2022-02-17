import React, { useState } from 'react';
import './EightBall.css'

const EightBall = (props) => {
    const pickRandomMsg = () => {
        const randomIdx = Math.floor(Math.random() * props.messages.length);
        setMessage(props.messages[randomIdx].msg);
        setColor(props.messages[randomIdx].color);
    };
    const reset = () => {
        setMessage('Think of a Question');
        setColor('black');
    };
    const [ message, setMessage ] = useState('Think of a Question');
    const [ color, setColor ] = useState('black');
    
    return (
        <>
        <div style={{backgroundColor: color}} className='EightBall' onClick={pickRandomMsg}>
            <span>
                {message}
            </span>
        </div>
        <button className='EightBall-reset' onClick={reset}>Reset</button>
        </>
        
    )

};

export default EightBall;