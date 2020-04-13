import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './AlbumCard.css';

const AlbumCard = (props) => {
  const { info, disableClick } = props;
  const {
    album, artist, image,
  } = info;
  const history = useHistory();
  const [goToAlbum, setGoToAlbum] = useState();

  useEffect(() => {
    if (goToAlbum) {
      // eslint-disable-next-line no-undef
      history.push(`/albums/${encodeURI(goToAlbum.replace(/\//g, ''))}`);
    }
  }, [goToAlbum]);

  return (
    <section className="album-container" onClick={() => !disableClick && setGoToAlbum(album)}>
      {!image
        ? <div className="album-card" />
        : <img className="album-card" alt={album} src={image} />}
      <h3>{album}</h3>
      <h4>{artist}</h4>
    </section>
  );
};

AlbumCard.defaultProps = {
  disableClick: false,
};

AlbumCard.propTypes = {
  disableClick: PropTypes.bool,
  info: PropTypes.shape({
    album: PropTypes.string,
    artist: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default memo(AlbumCard);
