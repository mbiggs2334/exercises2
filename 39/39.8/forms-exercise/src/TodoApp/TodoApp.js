import React from 'react';
import TodoList from './TodoList';
import './TodoApp.css'

const TodoApp = () => {
    return (
        <div className="TodoApp">
            <h1>Make a nice TodoList</h1>
            <h2>Don't you just hate it when you forget things?</h2>
            <h3>Now you don't have to!</h3>
            <TodoList />
        </div>
    )
};

export default TodoApp