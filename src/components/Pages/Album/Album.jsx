import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AlbumCard from '../../Mols/AlbumCard';
import { SET_SEARCH, SET_SEARCH_RESULTS, SET_ALBUM } from '../../../constants/action-types';
import { searchAlbums, getAlbum } from '../../../services/spotify.service';
import AlbumSongs from '../../Orgs/AlbumSongs';

import './Album.css';

const AlbumSongsWrapper = styled.div`
  margin-top: 70px;
  margin-left: 30px;
`;

const GoBackButton = styled.button`
  background: none;
  border: none;
  color: #FAFAFA;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  margin-bottom: 20px;
  &:hover {
    background: rgba(0,0,0,0.5);
  }
`;

const Album = (props) => {
  const { match } = props;
  const { album } = match.params;
  const results = useSelector((state) => state.search.results);
  const accessToken = useSelector((state) => state.search.accessToken);
  const info = results.find((r) => r.album.replace(/\//g, '') === album);
  const tracks = useSelector((state) => state.album.album);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      if (!info && album.length > 2) {
        dispatch({ type: SET_SEARCH, searchValue: album });
        searchAlbums(album, accessToken).then((albums) => dispatch({
          type: SET_SEARCH_RESULTS, results: albums,
        }));
      }

      if (info) {
        getAlbum(info.id, accessToken).then((songs) => dispatch({
          type: SET_ALBUM, album: songs,
        }));
      }
    }
  });

  return (
    <section className="album-page-container">
      <div className="album-page-left-panel">
        <GoBackButton type="button" onClick={() => history.goBack()}>
          {'< Voltar'}
        </GoBackButton>
        {info && <AlbumCard disableClick info={info} />}
      </div>
      <AlbumSongsWrapper>
        {tracks && <AlbumSongs songs={tracks} />}
      </AlbumSongsWrapper>
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
