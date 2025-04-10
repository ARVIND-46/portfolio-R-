import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects. Built using React and styled with custom CSS.",
      link: "https://github.com/ARVIND-46/portfolio-R-.git"
    },
    {
      title: "Task Tracker App",
      description: "A task management app built with Django and SQLite. Users can track their daily to-dos.",
      link: "https://github.com/ARVIND-46/TaskTrackerPyAssignment.git"
    },
    {
      title: "LAMP",
      description: "A full-stack web app for learning platform",
      link: "https://github.com/ARVIND-46/TaskTrackerPyAssignment.git"
    }
  ];

  return (
    <div id="Project" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
