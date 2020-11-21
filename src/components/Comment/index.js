import './Comment.css';

export default function Comment(props) {
    return (
    <div className="comment">
        <h2>{props.author}</h2>
        <p>{props.text}</p>
        <p>Date: 28/10/2021</p>
    </div>
  );
}
