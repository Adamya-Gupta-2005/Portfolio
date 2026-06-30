import '../styles/project.css';
import { projects } from '../data/projects.js'
import { useState } from 'react';
import close from '../assets/profileImg/close.png'

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

  return (
    <main className="container">

      <div className='header'>
        <h2>Projects</h2>
        <p>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      <div className='project-container'>
        {projects.map((project) => {
          return (
            <div 
              className='project-block'
              onClick={() => handleOpenModal(project)}
              key={project.id}
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-container">
                {project.techs.map((tech) => {
                return (
                  <div key={tech}>{tech}</div>
                );
              })}
              </div>
            </div>
          )
        })}
      </div>

      {/**Modal Container */}
        {selectedProject && (
          <div className='modal'>
            <div className='project-block selected'>
              <div className='closeButton' onClick={closeModal}><img src={close}/></div>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="tech-container">
                {selectedProject.techs.map((tech) => {
                return (
                  <div key={tech}>{tech}</div>
                );
              })}
              </div>
              <div className="btn-container">
                <a href={selectedProject.github} target='_blank'>View Code</a>
                <a href={selectedProject.live} target='_blank'>Visit Website</a>
              </div>
            </div>
          </div>
        )}
    </main>
  );
}
