import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DogApp from './DogApp/DogApp';
import ColorApp from './ColorFactory/ColorApp';
import DogRoutes from './DogApp/DogRoutes';
import ColorRoutes from './ColorFactory/ColorRoutes';

const AppRoutes = ({cFunction}) => {

    const [colors, setColors] = useState([]);

    const addColor = (colorData) => {
        setColors(colors => [...colors, colorData]);
    };

    return (
        <>
        <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/dogs"><DogApp /></Route>
            <Route exact path="/colors"><ColorApp getColor={cFunction} addColor={addColor} colors={colors}/></Route>
        </Switch>
        <DogRoutes />
        <ColorRoutes  />
        <Redirect to="/" />
        </>
    )
};

export default AppRoutes;