import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import VendingMachine from './VendingMachine';
import Butterfinger from './Butterfinger';
import Doritos from './Doritos';
import SourPatchKids from './SourPatchKids';
import Nav from './Nav';
import BeefJerky from './BeefJerky';

const App = () => {
    return (
        <main className="App">
            <BrowserRouter>
                <Nav />
                <Route exact path="/">
                    <VendingMachine />
                </Route>
                <Route exact path="/butterfinger">
                    <Butterfinger />
                </Route>
                <Route exact path="/doritos">
                    <Doritos />
                </Route>
                <Route exact path="/sourpatchkids">
                    <SourPatchKids />
                </Route>
                <Route exact path="/beefjerky">
                    <BeefJerky />
                </Route>
            </BrowserRouter>
        </main>
    )
};

export default App;