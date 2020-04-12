import React, { memo } from 'react';
import AlbumCard from '../../Mols/AlbumCard';
import { RECENT_RESULTS_TITLE } from '../../../constants/labels';

const mockedRecentAlbums = [
  { artist: 'Artist 1', album: 'Album 1' },
  { artist: 'Artist 2', album: 'Album 2' },
  { artist: 'Artist 3', album: 'Album 3' },
  { artist: 'Artist 4', album: 'Album 4' },
];

export default memo(() => (
  <section className="results">
    <h2>{RECENT_RESULTS_TITLE}</h2>
    <div className="results-container">
      {mockedRecentAlbums.map((a) => <AlbumCard key={a.album} info={a} />)}
    </div>
  </section>
));
