import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AlbumCard from '../../Mols/AlbumCard';
import { SET_ALBUM } from '../../../constants/action-types';
import { searchAlbums, getAlbum } from '../../../services/spotify.service';
import AlbumSongs from '../../Orgs/AlbumSongs';

import './Album.css';

const AlbumSongsWrapper = styled.div`
  margin-top: 70px;
  margin-left: 30px;
`;

const GoBackButton = styled.button`
  background: rgba(0,0,0,0.8);
  border: none;
  color: #FAFAFA;
  font-size: 16px;
  cursor: pointer;
  padding: 8px;
  width: fit-content;
  margin-left: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  &:hover {
    background: rgba(0,0,0,0.5);
  }
`;

const Album = (props) => {
  const { match } = props;
  const { album } = match.params;
  const accessToken = useSelector((state) => state.search.accessToken);
  const results = useSelector((state) => state.search.results);
  const currentAlbum = useSelector((state) => state.album.album);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      if (album.length > 2) {
        let info = results.find((r) => r.album.replace(/\//g, '') === album);
        if (info) {
          getAlbum(info.id, accessToken).then((songs) => dispatch({
            type: SET_ALBUM, album: { songs, info },
          }));
        } else {
          searchAlbums(album, accessToken).then((albums) => {
            info = albums.find((r) => r.album.replace(/\//g, '') === album);
            if (info) {
              getAlbum(info.id, accessToken).then((songs) => dispatch({
                type: SET_ALBUM, album: { songs, info },
              }));
            }
          });
        }
      }
    }
  }, [accessToken]);

  return (
    <section className="album-page-container">
      <div className="album-page-left-panel">
        <GoBackButton type="button" onClick={() => history.goBack()}>
          {'< Voltar'}
        </GoBackButton>
        {currentAlbum && currentAlbum.info && <AlbumCard disableClick info={currentAlbum.info} />}
      </div>
      <AlbumSongsWrapper>
        {currentAlbum && currentAlbum.songs && <AlbumSongs songs={currentAlbum.songs} />}
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
