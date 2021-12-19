import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Sidebar.css";

class Sidebar extends React.Component {
  render() {
    const containerClass = this.props.isToggleOn ? 'sidebar-container-sm-screen' : 'sidebar-container';
    return (
      <div className={containerClass}>
        <div className="sidebar-parent">
          <div className="sidebar-profile">
            <div className="sidebar-profile-photo"></div>
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
            <li>About</li>
            <li>My Skills</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="sidebar-links-container">
          <div className="sidebar-links">
            <FaGithub className = 'sidebar-link'/>
            <FaFacebook className = 'sidebar-link'/>
            <FaLinkedin className = 'sidebar-link'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
