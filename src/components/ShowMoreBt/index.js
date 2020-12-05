import React, { Component } from "react";
import "./ShowMoreBt.css";

export default class ShowMoreBt extends Component {
  state = {
    isDisabled: false,
  };

  handleButtonClick = () => {
    this.setState({ isDisabled: true });
    this.props.onClick().then(() => {
      this.setState({ isDisabled: false });
    });
  };

  render() {
    const { isDisabled } = this.state;
    
    return (
      <button
        onClick={this.handleButtonClick}
        className="show-more"
        disabled={isDisabled}
      >
        {!isDisabled && <span>SHOW MORE</span>}
        {isDisabled && <div className="show-more__load" />}
        {/* <span className={this.state.isDisabled ? "hidden" : ""}>SHOW MORE</span>
        <div
          className={!this.state.isDisabled ? "hidden" : "show-more__load"}
        ></div> */}
      </button>
    );
  }
}

// export default class ShowMoreBt extends Component {
//   constructor(props) {
//     super(props);
//     this.state={
//       isDisabled:true,
//     }
//   }

//   render() {
//     return (
//       <button onClick={this.props.onClick} className="show-more" disabled={this.state.isDisabled} >
//         <span className="hidden">SHOW MORE</span>
//         <div className="show-more__load "></div>
//       </button>
//     );
//   }
// }

// Нажали на кнопку
// заменили текст на кружочек лоадера
// через 5 секунд вернули текст обратно а лоадер спрятали
// в момент кружочка кнопка неактивна, должна быть дизейблд

// export default function ShowMoreBt(props) {
//   return (
//     <button onClick={props.onClick} className="show-more">
//       <span id="show-more">SHOW MORE</span>
//       <div id="load" className="show-more__load hidden"></div>
//     </button>
//   );
// }
