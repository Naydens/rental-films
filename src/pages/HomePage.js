import Menu from "../components/Header";
import FiltersList from "../components/FiltersList";
import ShowMoreBt from "../components/ShowMoreBt";
import Film from "../components/Film";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="container">
      <div className="container__main">
        <Header />
        <Film />
        <ShowMoreBt />
      </div>

      <div className="container__right">
        <FiltersList />
      </div>
    </div>
  );
}
