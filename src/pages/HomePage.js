import { useEffect, useState } from 'react';
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Layout from './Layout';

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
      .then(posts => setFilms([...films, ...posts.slice(0, 5)]));
  }

  const filmsList = films.map((film) => <Film key={film.id} />);

  return (
    <Layout>
      {filmsList}
      <ShowMoreBt onClick={handleClick} />
    </Layout>
  );
}
