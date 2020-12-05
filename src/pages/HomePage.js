import { useEffect, useState } from 'react';
import Menu from "../components/Header";
import FiltersList from "../components/FiltersList";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Header from "../components/Header";

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setFilms(posts.slice(0, 5)));
  }, []);

  function handleClick() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setFilms([...films, ...posts.slice(0,5)]));
  }

  const filmsList = films.map((film) => <Film key={film.id} />);

  return (
    <div className="container">
      <div className="container__main">
        <Header />
        {filmsList}
        <ShowMoreBt onClick={handleClick} />
      </div>

      <div className="container__right">
        <FiltersList />
      </div>
    </div>
  );
}
