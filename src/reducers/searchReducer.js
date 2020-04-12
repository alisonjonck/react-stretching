import { SET_SEARCH, SET_SEARCH_RESULTS, ADD_RECENT_RESULTS } from '../constants/action-types';

const initialState = {
  searchValue: undefined,
  results: [],
  recentResults: [],
};

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
