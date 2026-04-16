import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "African Artists",
    description: "Full-stack app to discover African musicians by country, with paginated search and artist profiles.",
    tech: ["React", "Node.js", "PostgreSQL", "Knex"],
    code: "https://github.com/YanniWessi",
    live: "#",
  },
  {
    title: "African Artists Frontend",
    description: "SSR React Router 7 frontend with TailwindCSS for the African artists discovery platform.",
    tech: ["React Router 7", "TypeScript", "TailwindCSS", "SSR"],
    code: "https://github.com/YanniWessi",
    live: "#",
  },
  {
    title: "Portfolio",
    description: "Personal developer portfolio showcasing projects and skills, built with React.",
    tech: ["React", "CSS", "JavaScript"],
    code: "https://github.com/YanniWessi",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <span className="section-label">{"// WORK"}</span>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, i) => (
          <div key={i} className="project-card">
            <div className="card-thumbnail">
              <div className="card-overlay">
                <div className="tech-tags">
                  {project.tech.map((tag, j) => (
                    <span key={j} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc">{project.description}</p>
              <div className="card-links">
                <a href={project.code} className="card-link" target="_blank" rel="noreferrer">Code</a>
                <a href={project.live} className="card-link card-link-live" target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
