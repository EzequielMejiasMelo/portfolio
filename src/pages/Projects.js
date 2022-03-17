import React from "react";
import { projectData } from "../projectData";

const Projects = () => {
  return (
    <div className="container-fluid projects">
      <div className="container spacer">
        <h3>Pinned Projects</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            {projectData.slice(0, 3).map((project) => (
              <tr key={project.title}>
                <td>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </td>
                <td>{project.description}</td>
                <td>{project.tools}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container spacer pt-5">
        <h3>Future Ventures (Teach/Develop myself)</h3>
        <ul>
          <li>
            Scalable distributed systems(infrastructure, networks,
            microservices)
          </li>
          <li>Machine Learning</li>
          <li>Security</li>
          <li>Program to reaveal lottery numbers</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
