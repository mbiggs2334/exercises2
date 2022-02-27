import React, { useState } from 'react';

const UseFlip = (initialState=false) => {
    const [state, setState] = useState(initialState);
    const changeState = () => {
        setState(state => !state);
    };
    return [state, changeState];
};

export default UseFlip;