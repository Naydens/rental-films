import Filter from "../Filter";
import styles from "../Filter/Filter.module.css";

const categoryFilters = [
  { text: "Action", value: 1 },
  { text: "Animation", value: 2 },
  { text: "Children", value: 3 },
  { text: "Classics", value: 4 },
  { text: "Comedy", value: 5 },
  { text: "Documentary", value: 6 },
  { text: "Drama", value: 7 },
  { text: "Family", value: 8 },
  { text: "Foreign", value: 9 },
  { text: "Games", value: 10 },
  { text: "Horror", value: 11 },
  { text: "Music", value: 12 },
  { text: "New", value: 13 },
  { text: "Sci-Fi", value: 14 },
  { text: "Sports", value: 15 },
  { text: "Travel", value: 16 },
];

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

export default function FiltersList() {
  return (
    <div className={styles.filters}>
      <Filter  header="By category" filtersList={categoryFilters} />
      <hr className={styles.filters__line} />
      <Filter header="By language" filtersList={languageFilters} />
      <hr className={styles.filters__line} />
      <Filter header="By rating" filtersList={ratingFilters} />
    </div>
  );
}
