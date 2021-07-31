import React from "react";
import { getAllGenres } from "../../services/filmsService";
import Filter from "../Filter";
import styles from "../Filter/Filter.module.css";

const languageFilters = [
  { text: "English", value: 1 },
  { text: "Italian", value: 2 },
  { text: "Japanese", value: 3 },
  { text: "Mandarin", value: 4 },
  { text: "French", value: 5 },
  { text: "German", value: 6 },
];

const ratingFilters = [
  {
    text: (
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </span>
    ),
    value: 1,
  },
  {
    text: (
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </span>
    ),
    value: 2,
  },
  {
    text: (
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </span>
    ),
    value: 3,
  },
  {
    text: (
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-o" aria-hidden="true"></i>
      </span>
    ),
    value: 4,
  },
  {
    text: (
      <span>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
      </span>
    ),
    value: 5,
  },
];

export default class FiltersList extends React.Component {
  state = {
    genres: []
  }

  componentDidMount() {
    getAllGenres()
      .then(data => this.setState({
        genres: data.genres,
        key:data.id
      }));
  }
  
  render() {
    return (
      <div className={styles.filters}>
        <Filter header="By category" filtersList={this.state.genres} />
        <hr className={styles.filters__line}  />
        <Filter header="By language" filtersList={languageFilters} />
        <hr className={styles.filters__line} />
        <Filter header="By rating" filtersList={ratingFilters} />
      </div>
    );
  }
}
