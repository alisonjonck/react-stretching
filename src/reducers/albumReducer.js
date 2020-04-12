import { SET_ALBUM, ADD_RECENT_ALBUM } from '../constants/action-types';

const initialState = {
  album: undefined,
  recentAlbums: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return { ...state, album: action.album };

    case ADD_RECENT_ALBUM:
      state.recentAlbums.push(action.album);
      return state;

    default:
      return state;
  }
};

export default albumReducer;
