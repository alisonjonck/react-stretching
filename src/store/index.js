import { createStore, combineReducers } from 'redux';
import searchReducer from '../reducers/searchReducer';
import albumReducer from '../reducers/albumReducer';

let storedRecentResults;
try {
  storedRecentResults = JSON.parse(localStorage.getItem('recentResults'));
} catch (error) {
  // eslint-disable-next-line no-console
  console.info('No recent results found');
}

let storedRecentAlbums;
try {
  storedRecentAlbums = JSON.parse(localStorage.getItem('recentAlbums'));
} catch (error) {
  // eslint-disable-next-line no-console
  console.info('No recent results found');
}

const store = createStore(combineReducers({
  search: searchReducer,
  album: albumReducer,
}),
{
  search: { recentResults: storedRecentResults },
  album: { recentAlbums: storedRecentAlbums },
});

export default store;
