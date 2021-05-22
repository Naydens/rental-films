import { useEffect, useState } from "react";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Layout from "./Layout";
import { getAllFilms } from '../services/filmsService';

export default function HomePage(props) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getAllFilms().then((filmsData) => setFilms(filmsData.results));
  }, []);

  function handleClick() {
    return getAllFilms().then((posts) => setFilms([...films, ...posts.slice(0, 5)]));
  }

  const filmsList = films.map((film) => <Film filmObj={film} key={film.id} />);

  return (
    <Layout>
      {filmsList}
      <ShowMoreBt onClick={handleClick} />
    </Layout>
  );
}
