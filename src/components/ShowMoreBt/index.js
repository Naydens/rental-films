import "./ShowMoreBt.css";

// Нажали на кнопку
// заменили текст на кружочек лоадера
// через 5 секунд вернули текст обратно а лоадер спрятали
// в момент кружочка кнопка неактивна, должна быть дизейблд

export default function ShowMoreBt() {
  return (
    <button className="container__show-more">
      <span id="show-more">SHOW MORE</span>
      <div id="load" className="container__load hidden"></div>
    </button>
  );
}
