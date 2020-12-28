export function getAllFilms() {
    return fetch("https://0629d076-bde3-4b10-93ab-0b11e56f54f1.mock.pstmn.io/films")
      .then((response) => response.json());
}

export function getFilm(id) {
    return fetch("https://0629d076-bde3-4b10-93ab-0b11e56f54f1.mock.pstmn.io/films") // + id
      .then((response) => response.json());
}