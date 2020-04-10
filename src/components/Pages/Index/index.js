import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Home from '../Home';
import Album from '../Album';

export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/albums/:nome">
                    <Album />
                </Route>
            </Switch>
        </Router>
    );
};
