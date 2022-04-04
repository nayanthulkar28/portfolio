import React from "react";
import "./Mainbody.css";
import Intro from "./intro/intro";
import About from './About/About';
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Sphere from './Sphere/Sphere'

class Mainbody extends React.Component {
  render() {
    const mainHidden = this.props.isToggleOn ? 'mainbody-container-hidden' : 'mainbosy-container'; 
    return (
      <div className={mainHidden}>
        <div className="mainbody-container-shift">
          <Intro />
          <About />
          <Sphere />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Mainbody;
