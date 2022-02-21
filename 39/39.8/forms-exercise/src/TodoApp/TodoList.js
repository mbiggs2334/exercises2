import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

const TodoList = () => {

    const [todoList, setTodoList] = useState([]);

    const removeTodo = (todo) => {
        const idx = todoList.indexOf(todo);
        todoList.splice(idx, 1);
        setTodoList([...todoList]);
    };

    const addTodo = (newTodo) => {
        setTodoList([...todoList, newTodo]);
    };

    return (
        <>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList">
                <ul className='TodoList-list'>
                    {todoList.map(val => 
                        <Todo key={uuid()} todo={val} removeTodo={removeTodo} />
                    )}
                </ul>
            </div>
        </>
        
    )
};

export default TodoList;