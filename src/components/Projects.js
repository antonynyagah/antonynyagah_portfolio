import React from 'react';
import { projects } from '../data';
import '../App.css';

const Projects = () => {
  return (
    <section id="projects" className="center-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {/* Display projects in a column */}
        {projects.map((project, index) => (
          <div className="project-column" key={index}>
            <h3>{project.title}</h3>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <p>{project.description}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-button">
              Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
