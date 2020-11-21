import "./Film.css";

export default function Film(props) {
  return (
    <div className="content">
      <div className="content__film">
        <img
          src="https://picsum.photos/100/100"
          alt=""
          className="content__img-film"
        />
        <a href="#" className="film__film-more">
          &rsaquo;
        </a>

        <div className="film__head-line">
          <h2>Film name 1</h2>
          <span className="film__release">relis 2015</span>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          mollitia quisquam iste possimus culpa sed esse sint nemo. Voluptate
          quam dolorum laudantium quidem tenetur earum molestiae distinctio
          obcaecati eligendi ea. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Libero accusantium itaque est eaque quod voluptates
          consectetur nostrum culpa beatae expedita
        </p>
      </div>
    </div>
  );
}

// export default function Film(props) {
//   return (
//     <div className="content">
//       <div className="content__film">
//         <img
//           src="https://picsum.photos/100/100"
//           alt=""
//           className="content__img-film"
//         />
//         <a href="#" className="film__film-more">
//           &rsaquo;
//         </a>

//         <div className="film__head-line">
//           <h2>{props.title}</h2>
//   <span className="film__release">{props.releaseYear}</span>
//         </div>

//         <p>
//           {props.description}
//         </p>
//       </div>
//     </div>
//   );
// }
