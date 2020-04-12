import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchField from '../../Mols/SearchField/SearchField';
import ResultsContainer from '../../Orgs/ResultsContainer';
import RecentResults from '../../Orgs/RecentResults';
import { SET_SEARCH, SET_SEARCH_RESULTS } from '../../../constants/action-types';
import { searchAlbums } from '../../../services/spotify.service';

export default memo(() => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const {
    searchValue, results, recentResults, accessToken,
  } = searchState;
  const onSearchValueChange = (e) => {
    const text = e.target.value;
    dispatch({ type: SET_SEARCH, searchValue: text });
    if (accessToken && text.length > 2) {
      searchAlbums(text, accessToken).then((albums) => dispatch({
        type: SET_SEARCH_RESULTS, results: albums,
      }));
    }
  };

  return (
    <section className="default-container">
      <SearchField onChange={onSearchValueChange} />
      <ResultsContainer searchValue={searchValue} results={results} />
      <RecentResults recentResults={recentResults} />
    </section>
  );
});
