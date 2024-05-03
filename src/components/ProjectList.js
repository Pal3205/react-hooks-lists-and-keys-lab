import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id} // Make sure to provide a unique key
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;