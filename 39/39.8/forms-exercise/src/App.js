import React from 'react';
import './App.css'
import TodoButton from './TodoButton';
import ColorBoxButton from './ColorBoxButton';

const App = () => {
    return (
        <div className="App">
            <TodoButton />
            <ColorBoxButton />
        </div>
    )
};

export default App;