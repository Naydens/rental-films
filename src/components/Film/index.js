import React from "react";
import { Link } from "react-router-dom";
import "./Film.css";

export default function Film(props) {
  console.log(props.filmObj);
  return (
    <div className={`film ${props.full ? "film_full" : ""}`}>
      <div className="film__content">
        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${props.filmObj.poster_path}`} alt="" className="film__img" />
        {/* <a href="#" className="film__film-more">
          &rsaquo;
        </a> */}

        {!props.full && (
          <Link
            to={`/film-description/${props.filmObj.id}`}
            className="film__film-more"
          >
            &rsaquo;
          </Link>
        )}

        <div className="film__head-line">
          <h2>{props.filmObj.title}</h2>
          <span className="film__release">relis {props.filmObj.release_date}</span>
        </div>

        <p>{props.filmObj.overview}</p>
      </div>
    </div>
  );
}
