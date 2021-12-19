import React from "react";
import "./Hamberger.css";

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClickOnApp();
  }

  render() {
    const isClicked1 = this.props.isToggleOn
      ? "hamberger-bar-tilt-1"
      : "hamberger-bar";
    const isClicked2 = this.props.isToggleOn
      ? "hamberger-bar-tilt-2"
      : "hamberger-bar";
    const isClicked3 = this.props.isToggleOn
      ? "hamberger-bar-tilt-3"
      : "hamberger-bar";
    return (
      <button className="hamberger-container" onClick={this.handleClick}>
        <div className={isClicked1}></div>
        <div className={isClicked2}></div>
        <div className={isClicked3}></div>
      </button>
    );
  }
}

export default Hamberger;
