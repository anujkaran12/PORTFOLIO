// src/components/ProjectCard.tsx
import './ProjectCard.css'
// src/components/ProjectCard.tsx
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
  tech?: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
      
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.tech && (
          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-tag">{t}</span>
            ))}
          </div>
        )}
          <div className="overlay">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button" title={project.liveLink}>
            Live Demo
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button secondary" title={project.githubLink}>
            GitHub
            <i className='bi bi-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
