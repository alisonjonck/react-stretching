import {
  SET_ALBUM,
  ADD_RECENT_ALBUM,
  SET_SEARCH,
  SET_SEARCH_RESULTS,
  ADD_RECENT_RESULTS,
  SET_ACCESS_TOKEN,
} from '../constants/action-types';

export const setAlbum = (album) => ({
  type: SET_ALBUM,
  album,
});

export const addRecentAlbum = (album) => ({
  type: ADD_RECENT_ALBUM,
  album,
});

export const setSearch = (searchValue) => ({
  type: SET_SEARCH,
  searchValue,
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  results,
});

export const addRecentResults = (recentResults) => ({
  type: ADD_RECENT_RESULTS,
  recentResults,
});

export const setAccessToken = (accessToken) => ({
  type: SET_ACCESS_TOKEN,
  accessToken,
});
