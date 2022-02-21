import React from 'react';

const RemoveTodoButton = ({removeTodo}) => {
    return (
        <button onClick={removeTodo}>X</button>
    )
};

export default RemoveTodoButton;