import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

export default instance;

export const searchAlbums = (searchValue, token) => instance.get(`search?type=album&q=${searchValue}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((response) => response.data.albums && response.data.albums.items)
  .then((albums) => albums.map((a) => ({
    artist: a.artists.map((artist) => artist.name).join('/ '),
    album: a.name,
    image: a.images && a.images.length && a.images[0].url,
  })));

const authInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api/',
  headers: {
    Accept: 'application/json',
  },
});

export const authorize = () => {
  const params = new URLSearchParams();
  params.append('client_id', process.env.REACT_APP_SPOTIFY_CLIENT_ID);
  params.append('client_secret', process.env.REACT_APP_SPOTIFY_CLIENT_SECRET);
  params.append('token_type', 'bearer');
  params.append('expires_in', 3600);
  params.append('grant_type', 'client_credentials');

  return authInstance.post('token', params).then((response) => response.data.access_token);
};
