import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Song from '../../Atoms/Song';

const AlbumSongs = ({ songs }) => songs.map((song, i) => <Song info={song} key={`${song.name}-${i}`} />);

AlbumSongs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default memo(AlbumSongs);
