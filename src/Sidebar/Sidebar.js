import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    const containerClass = this.props.isToggleOn
      ? "sidebar-container-sm-screen"
      : "sidebar-container";
    return (
      <div className={containerClass}>
        <div className="sidebar-parent">
          <div className="sidebar-profile">
            <a href="#intro-container">
              <div className="sidebar-profile-photo"></div>
            </a>
            <div className="sidebar-profile-name">
              <span>Nayan</span>
            </div>
            <div className="sidebar-profile-web-dev">
              <span>Web developer</span>
            </div>
          </div>
        </div>
        <div className="sidebar-about">
          <ul className="sidebar-about-list">
            <li>
              <a href="#about-container">About</a>
            </li>
            <li>
              <a href="#my-projects">My Skills</a>
            </li>
            <li>
              <a href="#my-projects">Work</a>
            </li>
            <li>
              <a href="#my-projects">Blog</a>
            </li>
            <li>
              <a href="#contact-jump">Contact</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-links-container">
          <div className="sidebar-links">
            <a href="https://github.com/nayanthulkar28" target="_blank"><FaGithub className="sidebar-link" /></a>
            <a href="https://www.instagram.com/nayan_thulkar/" target="_blank"><FaInstagram className="sidebar-link" /></a>
            <a href="https://www.linkedin.com/in/nayan-thulkar-855391193/" target="_blank"><FaLinkedin className="sidebar-link" /></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
