import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="project-container" id = 'my-projects'>
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
          <div className="project-card">
            <div className="project-card-contained">
              <h4>React.js & THREE.js</h4>
              <h1><a href="https://nayanchar.click">Portfolio</a></h1>
              <p>Personal portfolio to get in contact with me and showcase my skills.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>HTML, CSS, Javascript & PHP</h4>
              <h1><a href="https://github.com/nayanthulkar28/xbox">XBOX E-commerce</a></h1>
              <p>Online e-commerce website to sell xbox games.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>PHP & MySQL</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Record System</a></h1>
              <p>3rd year project to get along with web development.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>React.js</h4>
              <h1><a href="https://github.com/nayanthulkar28/tic-tac-toe">TIC-TAC-TOE</a></h1>
              <p>Personal project to get along with react.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Python & Pygame</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Sudoku</a></h1>
              <p>Personal project to get along with python and OOPs.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Tech-Stack</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Title</a></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Tech-Stack</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Title</a></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Tech-Stack</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Title</a></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-contained">
              <h4>Tech-Stack</h4>
              <h1><a href="https://github.com/nayanthulkar28/Sudoku-Generator-and-Solver">Title</a></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
