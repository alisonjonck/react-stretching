import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchField from '../../Mols/SearchField/SearchField';
import ResultsContainer from '../../Orgs/ResultsContainer';
import RecentResults from '../../Orgs/RecentResults';
import { SET_SEARCH } from '../../../constants/action-types';

export default memo(() => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const { searchValue, results, recentResults } = searchState;
  const onSearchValueChange = (e) => dispatch({ type: SET_SEARCH, searchValue: e.target.value });

  return (
    <section className="default-container">
      <SearchField onChange={onSearchValueChange} />
      <ResultsContainer searchValue={searchValue} results={results} />
      <RecentResults recentResults={recentResults} />
    </section>
  );
});
