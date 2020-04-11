import React from 'react';
import SearchField from '../../Mols/SearchField/SearchField';
import ResultsContainer from '../../Orgs/ResultsContainer';
import RecentResults from '../../Orgs/RecentResults';

export default () => (
  <section className="default-container">
    <SearchField />
    <ResultsContainer />
    <RecentResults />
  </section>
);
