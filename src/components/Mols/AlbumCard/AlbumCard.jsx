import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './AlbumCard.css';

const AlbumCard = (props) => {
  const { info } = props;
  const { album, artist, image } = info;

  return (
    <section className="album-container">
      {!image
        ? <div className="album-card" />
        : <img className="album-card" alt={album} src={image} />}
      <h3>{album}</h3>
      <h4>{artist}</h4>
    </section>
  );
};

AlbumCard.propTypes = {
  info: PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default memo(AlbumCard);
