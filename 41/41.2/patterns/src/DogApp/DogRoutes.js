import React from 'react';
import { Route } from 'react-router-dom';
import Dog from './Dog';

const DogRoutes = () => {
    return (
        <>
            <Route exact path="/dogs/:name"><Dog /></Route>
        </>
    )
};

export default DogRoutes;