import React, { useState, useEffect } from "react";
import Film from "../components/Film";
import Layout from "./Layout";

export default function FilmPage(props) {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
      .then((response) => response.json())
      .then((film) => setFilm(film));
  }, []);

  return (
    <Layout>
      <Film full filmObj={film} />
    </Layout>
  );
}

// import Comment from '../components/Comment';
// import FiltersList from '../components/FiltersList';

// const comments = [
//     {
//         author: "John",
//         text: "Bob's comment"
//     },
//     {
//         author: "Justin",
//         text: "Bob's comment"
//     },
//     {
//         author: "Rebeca",
//         text: "Bob's comment"
//     },
//     {
//         author: "Bob",
//         text: "Bob's comment"
//     },
// ];

// const commentsList = comments.map(function (item) {
//     return (<Comment author={item.author} text={item.text}></Comment>);
// });

// export default function FilmPage() {
//     return <div className="container">
//         <div className="container__main">
//         <h1>Film Page</h1>
//         <p>Info about film</p>

//         <h2>Comments List</h2>
//         {commentsList}
//         </div>

//         <div className="container__left filters">
//             <FiltersList />
//         </div>
//     </div>
// };

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(function(err) {console.log(err)});
