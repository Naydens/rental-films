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
        disabled={this.props.disabled || isDisabled  }
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


