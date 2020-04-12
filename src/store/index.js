import { createStore, combineReducers } from 'redux';
import searchReducer from '../reducers/searchReducer';
import albumReducer from '../reducers/albumReducer';

const store = createStore(combineReducers({
  search: searchReducer,
  album: albumReducer,
}),
// eslint-disable-next-line no-underscore-dangle
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
