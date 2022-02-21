import React from 'react';
import ReactDOM from 'react-dom';
import App from './TodoApp/App';

const TodoButton = (props) => {
    const loadTodo = () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    };

    return (
        <button onClick={loadTodo}>Todo List Creator</button>
    )
};

export default TodoButton