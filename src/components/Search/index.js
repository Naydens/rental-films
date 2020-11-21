import "./Search.css"
export default function Search(props) {
  return (
    <form action="" className={`search-form ${props.className}`}>
      <input
        type="search"
        name=""
        id="search_by_name"
        className="search-form__input"
        placeholder="Search by name"
      />
    </form>
  );
}


// className={`search-form ${props.className}`}