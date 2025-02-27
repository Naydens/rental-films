import { useEffect, useState } from "react";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Layout from "./Layout";
import { getAllFilms, getFilmsPage } from "../services/filmsService";
import "./HomePage.css";

export default function HomePage(props) {
  const [films, setFilms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllFilms(genres).then((filmsData) => setFilms(filmsData.results));
  }, [genres]);

  function handleClickShoweMore() {
    if (page <= 499) {
      return getFilmsPage(page + 1).then((posts) => {
        setFilms(films.concat(posts.results));
        setPage(page + 1);
      });
    }
  }

  const filmsList = films.map((film) => <Film filmObj={film} key={film.id} />);

  const onGenreFilterChange = (id, isActive) => {
    if (isActive) {
      setGenres(genres.concat(id));
    } else {
      let index = genres.indexOf(id);
      let genresCopy = genres.slice();
      genresCopy.splice(index,1);
      setGenres(genresCopy);
    }
  };

  return (
    <Layout className="layout" onGenreFilterChange={onGenreFilterChange}>
      {filmsList}
      <div className="layout__buttons-wrapper">
        <ShowMoreBt onClick={handleClickShoweMore} disabled={page > 499} />
      </div>
    </Layout>
  );
}
