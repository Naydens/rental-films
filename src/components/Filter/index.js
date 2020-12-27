import styles from "../Filter/Filter.module.css";

export default function Filter(props) {
  const labelElems = props.filtersList.map((item) => (
    <label key={item.value} >
      <input  type="checkbox" name="" value={item.value} />
      <span></span> {item.text}
    </label>
  ));

  return (
    <form  action="" className={styles.filters__allSearch}>
      <p>{props.header}</p>
      {labelElems}
    </form>
  );
}
