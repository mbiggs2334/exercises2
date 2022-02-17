import React from 'react';
import EightBall from './EightBall';
import messages from './messages';

const App = () => {
    return (
        <EightBall messages={messages} />
    )
};

export default App;