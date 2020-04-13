import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../../Mols/AlbumCard';
import { RESULTS_CONTAINER_TITLE, NO_RESULTS_MESSAGE } from '../../../constants/labels';

import './ResultsContainer.css';

const ResultsContainer = (props) => {
  const { searchValue, results } = props;
  const noResultsMessage = (!results || !results.length) && NO_RESULTS_MESSAGE;

  if (!searchValue) return null;

  return (
    <section className="results">
      <h2>{`${noResultsMessage || RESULTS_CONTAINER_TITLE} "${searchValue}"`}</h2>
      <div className="results-container">
        {!noResultsMessage && results.map((a, i) => <AlbumCard key={`a.album-${i}`} info={a} />)}
      </div>
    </section>
  );
};

ResultsContainer.propTypes = {
  searchValue: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
  })),
};

ResultsContainer.defaultProps = {
  searchValue: undefined,
  results: undefined,
};

export default memo(ResultsContainer);
