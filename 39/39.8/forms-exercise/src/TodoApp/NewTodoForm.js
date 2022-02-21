import React, { useState } from 'react';

const NewTodoForm = ({removeTodo, addTodo}) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        setInput(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input)
        setInput('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo: </label>
            <input
                type="text"
                id="todo"
                required
                placeholder="Enter a todo..."
                value={input}
                name="todo"
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
};

export default NewTodoForm;