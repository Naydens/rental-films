import { useEffect, useState } from "react";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Layout from "./Layout";

export default function HomePage(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://0629d076-bde3-4b10-93ab-0b11e56f54f1.mock.pstmn.io/films")
      .then((response) => response.json())
      .then((posts) => setFilms(posts.slice(0, 5)));
  }, []);

  function handleClick() {
    return fetch("https://0629d076-bde3-4b10-93ab-0b11e56f54f1.mock.pstmn.io/films")
      .then((response) => response.json())
      .then((posts) => setFilms([...films, ...posts.slice(0, 5)]));
  }

  const filmsList = films.map((film) => <Film filmObj={film} key={film.id} />);

  return (
    <Layout>
      {filmsList}
      <ShowMoreBt onClick={handleClick} />
    </Layout>
  );
}
