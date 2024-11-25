import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="project-container" id = 'my-projects'>
      <div className="project-parent">
        <div className="project-disc">
          <h1>My Projects</h1>
          <p>
              These are my personal projects. Why projects? Because projects are best way to learn new tech
              and build cool stuff. Feel free to explore my projects and give me feedback.  
          </p>
        </div>
        <div className="project-holder">
          <div className="project-card">
            <div className="project-card-contained">
              <h4>React.js, Golang, JWT, Websockers, AWS & nginx</h4>
              <h1><a href="https://echo-box.nayanchar.click" target="_blank" rel="noreferrer">Echo Box</a></h1>
              <p>Anonymous chat web application. Connect with strangers and start your chit-chats</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>React.js, THREE.js, Golang & AWS</h4>
              <h1><a href="https://nayanchar.click">Portfolio</a></h1>
              <p>Personal portfolio to get in contact with me and showcase my skills.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>HTML, CSS, Javascript & PHP</h4>
              <h1><a href="https://github.com/nayanthulkar28/xbox" target="_blank" rel="noreferrer">XBOX E-commerce</a></h1>
              <p>Online e-commerce website to sell xbox games.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>React.js</h4>
              <h1><a href="https://github.com/nayanthulkar28/tic-tac-toe" target="_blank" rel="noreferrer">TIC-TAC-TOE</a></h1>
              <p>Personal project to get along with react.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Python & Pygame</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver" target="_blank" rel="noreferrer">Sudoku</a></h1>
              <p>Personal project to get along with python and OOPs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
