import "./ShowMoreBt.css";

export default function() {
    return (
        <button className="container__show-more">
          <span id="show-more">SHOW MORE</span>
          <div id="load" className="container__load hidden"></div>
        </button>
    )
}