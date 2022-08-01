import React from "react";
import "../styles/Skills.css"

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h1>Skills</h1>
      <ol className="skill-list">
        <li className="skill-item">
          <h2>Technical skills</h2>
          <span>HTML, CSS, JavaScript, ReactJS, SQL, Agile/Scrum</span>
        </li>
        <li className="skill-item">
          <h2>Softwares & Tools</h2>
          <span>Visual Studio Code, Postman, Git, MySQL, Jira, Strapi</span>
        </li>
        <li className="skill-item">
          <h2>Soft skills</h2>
          <span>
            Adaptibilty, Team Player Mindset, Emotional Intelligence,
            Communication
          </span>
        </li>
      </ol>
    </div>
  );
};

export default Skills;
