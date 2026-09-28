import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-icon">
        {project.icon}
      </div>

      <h3>{project.title}</h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="technology-list">

        {project.technologies.map((technology, index) => (
          <span key={index}>
            {technology}
          </span>
        ))}

      </div>

      <div className="project-buttons">

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>

      </div>

    </article>
  );
}

export default ProjectCard;