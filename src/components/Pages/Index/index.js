import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import Album from '../Album';
import MainContainer from '../../Templates/MainContainer';

export default () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <MainContainer>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/albums/:artist">
          <Album />
        </Route>
      </Switch>
    </Router>
  </MainContainer>
);
