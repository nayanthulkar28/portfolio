import React from "react";
import "./Projects.css";
import portfolio from "../../resources/portfolio.jpg";
import xbox from "../../resources/xbox.jpg";
import ticTacToe from "../../resources/tic-tac-toe.jpg";
import sudoku from "../../resources/sudoku.jpg";

function Projects(props) {
  return (
    <div className="project-container">
      <div className="project-parent">
        <div className="project-disc">
          <h1>My Projects</h1>
          <p>
            My projects mostly revolves around web development. The tech stack i
            have used are HTML, CSS, Javascript, React for developing UIs. I
            know MySQL, cassandra, Scylla database as well.
          </p>
        </div>
        <div className="project-holder">
          <div className = 'flex-container'>
          <div className="project-img">
            <img className="img-projects" src={portfolio} alt="portfolio" />
          </div>
          <div className="project-img">
            <img className="img-projects" src={xbox} alt="xbox" />
          </div>
          <div className="project-img">
            <img className="img-projects" src={ticTacToe} alt="tic-tac-toe" />
          </div>
          <div className="project-img">
            <img className="img-projects" src={sudoku} alt="sudoku" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
