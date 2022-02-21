import React from 'react';
import RemoveTodoButton from './RemoveTodoButton';

const Todo = ({todo, removeTodo}) => {

    const handleRemove = (e) => {
        removeTodo(todo);
    }

    return (
        <li>{todo} <RemoveTodoButton removeTodo={handleRemove} /></li>
    )
};

export default Todo;