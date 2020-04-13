import { SET_ALBUM, ADD_RECENT_ALBUM } from '../constants/action-types';

const initialState = {
  album: undefined,
  recentAlbums: [],
};
let storedRecentAlbums;
try {
  storedRecentAlbums = JSON.parse(localStorage.getItem('recentAlbums'));
} catch (error) {
  // eslint-disable-next-line no-console
  console.info('No recent results found');
}
initialState.recentAlbums = storedRecentAlbums;

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      const newState = { ...state };
      if (!newState.recentAlbums) { newState.recentAlbums = []; }
      newState.recentAlbums.push(action.album);
      return { ...newState, album: action.album };

    case ADD_RECENT_ALBUM:
      state.recentAlbums.push(action.album);
      return state;

    default:
      return state;
  }
};

export default albumReducer;
