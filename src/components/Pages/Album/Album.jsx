import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AlbumCard from '../../Mols/AlbumCard';
import { SET_SEARCH, SET_SEARCH_RESULTS } from '../../../constants/action-types';
import { searchAlbums } from '../../../services/spotify.service';

const Album = (props) => {
  const { match } = props;
  const { album } = match.params;
  const results = useSelector((state) => state.search.results);
  const accessToken = useSelector((state) => state.search.accessToken);
  const info = results.find((r) => r.album === album);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!info && accessToken && album.length > 2) {
      dispatch({ type: SET_SEARCH, searchValue: album });
      searchAlbums(album, accessToken).then((albums) => dispatch({
        type: SET_SEARCH_RESULTS, results: albums,
      }));
    }
  });

  return (
    <section className="default-container">
      <button type="button" onClick={() => history.goBack()}>{'< Voltar'}</button>
      {info && <AlbumCard info={info} />}
    </section>
  );
};

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      album: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default memo(Album);
