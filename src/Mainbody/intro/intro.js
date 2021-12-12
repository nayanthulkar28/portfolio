import React from "react";
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
          <h1>Web Developer</h1>
        </div>
        <div className="intro-links">
          <button type="button" className="contact-me btn btn-primary btn-lg">
            Contact Me
          </button>
          <a href="Resume.pdf" download = 'Resume.pdf'>
            <button
              type="button"
              className="resume btn btn-outline-secondary btn-lg"
              down
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
