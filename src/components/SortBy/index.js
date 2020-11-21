import { useState } from 'react';

export default function SortBy(props) {
 
  const [activeSort, setActivSort] = useState("year");
  
  function handleChose(event) {
    setActivSort(event.target.value);
  }
  
  return (
    <form action="">
      <select onChange={handleChose} value={activeSort} className={props.className} >
        <option value="name">NAME</option>
        <option value="year">YEAR</option>
        <option value="inStock">IN_STOCK</option>
      </select>
    </form>
  );
}
