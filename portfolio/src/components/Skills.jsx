import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode } from 'react-icons/fa';

const Skills = () => {
  return (
    <>
    <div id="Skills" className="skills">
        <h2>Skills</h2>
        <p>Here are some of the skills I've acquired:</p>
        <div className="skill-card">
            <FaHtml5 size={40} color="#e34c26" />
            <p>HTML5</p>
        </div>
        <div className="skill-card">
            <FaCss3Alt size={40} color="#264de4" />
            <p>CSS3</p>
        </div>
        <div className="skill-card">
            <FaJs size={40} color="#f0db4f" />
            <p>JavaScript</p>
        </div>
        <div className="skill-card">
             <FaReact size={40} color="#61dbfb" />
             <p>React</p>
         </div>
    </div>
    </>
  )
}

export default Skills