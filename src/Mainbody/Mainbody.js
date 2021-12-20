import React from "react";
import "./Mainbody.css";
import Intro from "./intro/intro";
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

class Mainbody extends React.Component {
  render() {
    const mainHidden = this.props.isToggleOn ? 'mainbody-container-hidden' : 'mainbosy-container'; 
    return (
      <div className={mainHidden}>
        <div className="mainbody-container-shift">
          <Intro />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Mainbody;
