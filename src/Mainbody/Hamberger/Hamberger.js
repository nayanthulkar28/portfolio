import React from "react";
import "./Hamberger.css";

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const isClicked1 = this.state.isToggleOn
      ? "hamberger-bar-tilt-1"
      : "hamberger-bar";
    const isClicked2 = this.state.isToggleOn
      ? "hamberger-bar-tilt-2"
      : "hamberger-bar";
    const isClicked3 = this.state.isToggleOn
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
