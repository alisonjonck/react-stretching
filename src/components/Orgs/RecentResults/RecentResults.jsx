import React from 'react';
import AlbumCard from '../../Mols/AlbumCard';

const mockedRecentAlbums = [
  { artist: 'Artist 1', album: 'Album 1' },
  { artist: 'Artist 2', album: 'Album 2' },
  { artist: 'Artist 3', album: 'Album 3' },
  { artist: 'Artist 4', album: 'Album 4' },
];

export default () => (
  <section className="results">
    <h2>Álbums buscados recentemente</h2>
    <div className="results-container">
      {mockedRecentAlbums.map((a) => <AlbumCard info={a} />)}
    </div>
  </section>
);
