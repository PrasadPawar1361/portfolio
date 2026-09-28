import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">

        <p>MY WORK</p>

        <h2>Projects</h2>

        <span>
          Some of the projects I have built while learning software
          development.
        </span>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;