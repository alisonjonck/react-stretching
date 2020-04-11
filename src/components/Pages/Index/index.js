import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import Album from '../Album';

export default () => (
  // eslint-disable-next-line react/jsx-filename-extension
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
