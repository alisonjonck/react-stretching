import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from '../Home';
import Album from '../Album';

const Wrapper = styled.section`
  font-family: 'Roboto', sans-serif;
`;

export default () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Wrapper>
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
  </Wrapper>
);
