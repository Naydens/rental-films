import { useEffect, useState } from "react";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Layout from "./Layout";
import { getAllFilms, getFilmsPage } from "../services/filmsService";
import ButtonToUp from "../components/ButtonToUp/ButtonToUp";
import "./HomePage.css";

export default function HomePage(props) {
  const [films, setFilms] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllFilms([]).then((filmsData) => setFilms(filmsData.results));
  }, []);

  function handleClickShoweMore() {
    if (page <= 499) {
      return getFilmsPage(page + 1).then((posts) => {
        setFilms(films.concat(posts.results));
        setPage(page + 1);
      });
    }
  }

  const filmsList = films.map((film) => <Film filmObj={film} key={film.id} />);

  return (
    <Layout className="layout">
      {filmsList}
      <div className="layout__buttons-wrapper">
        <ShowMoreBt onClick={handleClickShoweMore} disabled={page > 499} />
        <ButtonToUp />
      </div>
    </Layout>
  );
}
