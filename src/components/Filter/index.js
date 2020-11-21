import "./Filter.css";

export default function Filter(props) {
  const labelElems = props.filtersList.map((item) => (
    <label>
      <input type="checkbox" name="" value={item.value} />
      <span></span> {item.text}
    </label>
  ));

  return (
    <form action="" className="filters__all-search">
      <p>{props.header}</p>
      {labelElems}
    </form>
  );
}
