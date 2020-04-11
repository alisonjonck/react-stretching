import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from '../../Mols/AlbumCard';

import './ResultsContainer.css';

const mockedRecentAlbums = [
  { artist: 'Artist 1', album: 'Album 1' },
  { artist: 'Artist 2', album: 'Album 2' },
  { artist: 'Artist 3', album: 'Album 3' },
  { artist: 'Artist 4', album: 'Album 4' },
];

const ResultsContainer = (props) => {
  const { searchValue } = props;

  if (!searchValue) return null;

  return (
    <section className="results">
      <h2>{`Resultados encontrados para "${searchValue}"`}</h2>
      <div className="results-container">
        {mockedRecentAlbums.map((a) => <AlbumCard info={a} />)}
      </div>
    </section>
  );
};

ResultsContainer.propTypes = {
  searchValue: PropTypes.string,
};

ResultsContainer.defaultProps = {
  searchValue: undefined,
};

export default ResultsContainer;
