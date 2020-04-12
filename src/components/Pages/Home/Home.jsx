import React, { memo } from 'react';
import SearchField from '../../Mols/SearchField/SearchField';
import ResultsContainer from '../../Orgs/ResultsContainer';
import RecentResults from '../../Orgs/RecentResults';

export default memo(() => (
  <section className="default-container">
    <SearchField />
    <ResultsContainer />
    <RecentResults />
  </section>
));
