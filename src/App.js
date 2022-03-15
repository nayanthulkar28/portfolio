import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import Mainbody from "./Mainbody/Mainbody";
import Hamberger from "./Hamberger/Hamberger";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.handleClickOnApp = this.handleClickOnApp.bind(this);
  }

  handleClickOnApp() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const isToggleOn = this.state.isToggleOn;
    return (
      <div className="App">
        <div className="port-container">
          <Sidebar isToggleOn={isToggleOn} />
          <Mainbody
            isToggleOn={isToggleOn}
            handleClickOnApp={this.handleClickOnApp}
          />
          <Hamberger
            isToggleOn={isToggleOn}
            handleClickOnApp={this.handleClickOnApp}
          />
        </div>
      </div>
    );
  }
}

export default App;
