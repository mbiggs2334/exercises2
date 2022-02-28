import React from 'react';
import { Route } from 'react-router-dom';
import Color from './Color';

const ColorRoutes = () => {
    return (
        <>
            <Route exact path="/colors/:color"><Color /></Route>
        </>
    )
};

export default ColorRoutes;