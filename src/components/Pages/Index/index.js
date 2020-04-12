import React, { memo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import Album from '../Album';
import MainContainer from '../../Templates/MainContainer';

export default memo(() => (
  // eslint-disable-next-line react/jsx-filename-extension
  <MainContainer>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/albums/:artist" component={Album} />
      </Switch>
    </Router>
  </MainContainer>
));
