import React from "react";
import TextLoop from "react-text-loop";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./intro.css";
import { BsDownload } from "react-icons/bs";

class intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canSmallBtn: window.innerWidth < 450,
    };
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          canSmallBtn: window.innerWidth < 450,
        });
      },
      false
    );
  }

  render() {
    const btnSize = this.state.canSmallBtn ? "btn-sm" : "btn-lg";
    return (
      <div className="intro-container" id="intro-container">
        <div className="intro-parent">
          <div className="intro-name">
            <h1>Hi</h1>
            <h1>I'm Nayan</h1>
            <TextLoop className='intro-tags' interval={1000} springConfig={{ stiffness: 180, damping: 12 }}>
              <span>Web Developer</span>
              <span>Competetive Programmer</span>
              <span>React Developer</span>
            </TextLoop>
          </div>
          <div className="intro-links">
            <a href="#contact-jump">
              <button
                type="button"
                className={"contact-me btn btn-primary " + btnSize}
              >
                Contact Me
              </button>
            </a>
            <a href="Resume.pdf" download="Resume.pdf">
              <button
                type="button"
                className={"resume btn btn-outline-secondary " + btnSize}
              >
                <span> Resume </span> <BsDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default intro;
