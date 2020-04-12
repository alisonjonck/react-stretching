import { SET_SEARCH, SET_SEARCH_RESULTS, ADD_RECENT_RESULTS } from '../constants/action-types';

const mockedResults = [
  { artist: 'Artist 1', album: 'Album 1' },
  { artist: 'Artist 2', album: 'Album 2' },
  { artist: 'Artist 3', album: 'Album 3' },
  { artist: 'Artist 4', album: 'Album 4' },
];
const initialState = {
  searchValue: undefined,
  results: mockedResults, // [],
  recentResults: mockedResults, // [],
};

let storedRecentResults;
try {
  storedRecentResults = JSON.parse(localStorage.getItem('recentResults'));
} catch (error) {
  // eslint-disable-next-line no-console
  console.info('No recent results found');
}
if (storedRecentResults) { initialState.recentResults = storedRecentResults; }

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return { ...state, searchValue: action.searchValue };

    case SET_SEARCH_RESULTS:
      return { ...state, results: action.results };

    case ADD_RECENT_RESULTS:
      state.recentResults.push(action.results);
      return state;

    default:
      return state;
  }
};

export default searchReducer;
