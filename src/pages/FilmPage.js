import React, { useState, useEffect } from "react";
import Film from "../components/Film";
import Layout from "./Layout";

export default function FilmPage(props) {


  console.log(props);
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=<<api_key>>&language=en-US`)
      .then((response) => response.json())
      .then((film) => setFilm(film));
  }, []);

  return (
    <Layout>
      <Film full filmObj={film} />
    </Layout>
  );
}

// `https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`