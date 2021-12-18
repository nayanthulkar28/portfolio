import React from "react";
import Typical from "react-typical";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./intro.css";
import { BsDownload } from "react-icons/bs";

function intro(props) {
  return (
    <div className="intro-container">
      <div className="intro-parent">
        <div className="intro-name">
          <h1>Hi</h1>
          <h1>I'm Nayan</h1>
          <Typical className = 'intro-tags'
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
          <button type="button" className="contact-me btn btn-primary btn-lg">
            Contact Me
          </button>
          <a href="Resume.pdf" download="Resume.pdf">
            <button
              type="button"
              className="resume btn btn-outline-secondary btn-lg"
            >
              <span> Resume </span> <BsDownload />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default intro;
