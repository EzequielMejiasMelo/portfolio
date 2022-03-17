import React from "react";
import { projectData } from "../projectData";

const Software = () => {
  return (
    <div className="container-fluid software">
      <div className="container spacer">
        <h2>Software Repository</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            {projectData.map((project) => (
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
    </div>
  );
};

export default Software;
