const API_SERVER = 'https://api.themoviedb.org/3';
const API_KEY = '50e28c2946dd6d45673965da6dadcf42';

export function getAllFilms(genres = []) {
  if (genres.length === 0) {
    return fetch(`${API_SERVER}/discover/movie?api_key=${API_KEY}`)
      .then((response) => response.json());
  } else {
    
    return fetch(`${API_SERVER}/discover/movie?api_key=${API_KEY}&with_genres=${genres.join()}`)
      .then((response) => response.json());
  }
}

export function getFilm(id) {
  return fetch("https://0629d076-bde3-4b10-93ab-0b11e56f54f1.mock.pstmn.io/films") // + id
    .then((response) => response.json());
}

export function getAllGenres() {
  return fetch(`${API_SERVER}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.json());
}