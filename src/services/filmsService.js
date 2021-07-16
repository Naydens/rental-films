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

export function getFilmsPage(page) {
  return fetch(`${API_SERVER}/discover/movie?page=${page}&api_key=${API_KEY}`)
    .then((response) => response.json());
}

export function getAllGenres() {
  return fetch(`${API_SERVER}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.json());
}