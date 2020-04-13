import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebouncedCallback } from 'use-lodash-debounce';
import SearchField from '../../Mols/SearchField/SearchField';
import ResultsContainer from '../../Orgs/ResultsContainer';
import RecentResults from '../../Orgs/RecentResults';
import { SET_SEARCH, SET_SEARCH_RESULTS } from '../../../constants/action-types';
import { searchAlbums } from '../../../services/spotify.service';

export default memo(() => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const recentAlbums = useSelector((state) => state.album.recentAlbums);
  const {
    searchValue, results, accessToken,
  } = searchState;
  const onSearchValueChange = (value) => {
    if (accessToken && value.length > 2) {
      dispatch({ type: SET_SEARCH, searchValue: value });
      searchAlbums(value, accessToken).then((albums) => dispatch({
        type: SET_SEARCH_RESULTS, results: albums,
      }));
    }
  };
  const debounceOnChange = useDebouncedCallback(onSearchValueChange, 500);

  return (
    <section className="default-container">
      <SearchField onChange={(e) => debounceOnChange(e.target.value)} />
      <ResultsContainer searchValue={searchValue} results={results} />
      {recentAlbums && <RecentResults recentResults={recentAlbums.map((a) => a.info)} />}
    </section>
  );
});
