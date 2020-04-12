import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../Home';
import Album from '../Album';
import MainContainer from '../../Templates/MainContainer';
import { authorize } from '../../../services/spotify.service';
import { SET_ACCESS_TOKEN } from '../../../constants/action-types';

export default memo(() => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.search.accessToken);
  useEffect(() => {
    if (!token) {
      authorize().then((accessToken) => dispatch({ type: SET_ACCESS_TOKEN, accessToken }));
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <MainContainer>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/albums/:artist" component={Album} />
        </Switch>
      </Router>
    </MainContainer>
  );
});
