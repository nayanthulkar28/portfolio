import React from "react";
import Typical from "react-typical";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./intro.css";
import { BsDownload } from "react-icons/bs";

class intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canSmallBtn: false,
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
    const btnSize = this.state.canSmallBtn ? 'btn-sm' : 'btn-lg';
    return (
      <div className="intro-container">
        <div className="intro-parent">
          <div className="intro-name">
            <h1>Hi</h1>
            <h1>I'm Nayan</h1>
            <Typical
              className="intro-tags"
              steps={[
                "Web Developer",
                1000,
                "Competetive programer",
                1000,
                "React Developer",
                1000,
              ]}
              loop={Infinity}
            />
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
