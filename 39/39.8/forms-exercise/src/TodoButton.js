import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp/TodoApp';

const TodoButton = (props) => {
    const loadTodo = () => {
        ReactDOM.render(<TodoApp />, document.getElementById('root'));
    };

    return (
        <button onClick={loadTodo}>Todo List Creator</button>
    )
};

export default TodoButton