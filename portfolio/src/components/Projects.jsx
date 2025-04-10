import React from 'react'

const Projects = () => {
    const projectData = [
        {
          title: "Portfolio Website",
          description: "Personal portfolio built using React and CSS.",
          link: ""
        },
        {
          title: "Task Tracker App",
          description: "A simple task tracking app using Django and SQLite.",
          link: ""
        },
        {
          title: "Food Ordering System",
          description: "A full-stack project for ordering food online.",
          link: ""
        }
      ];
  return (
    <>
    <div id="Project">
        <h2>PROJECTS</h2>
        {projectData.map((project,index) =>(
            <div className="cards" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        ))}

    </div>
    </>
  )
}

export default Projects