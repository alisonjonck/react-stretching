import React from 'react';
import PropTypes from 'prop-types';

import './AlbumCard.css';

const AlbumCard = (props) => {
  const { info } = props;
  const { album, artist } = info;

  return (
    <div className="album-card">
      <span>Card</span>
      {`${album}-${artist}`}
    </div>
  );
};

AlbumCard.propTypes = {
  info: PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
  }).isRequired,
};

export default AlbumCard;
