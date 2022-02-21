import React from 'react';
import ReactDOM from 'react-dom';
import App from './ColorBoxMaker/App';

const ColorBoxButton = (props) => {
    const loadTodo = () => {
        ReactDOM.render(<App />, document.getElementById('root'));
    };

    return (
        <button onClick={loadTodo}>Color Box Creator</button>
    )
};

export default ColorBoxButton