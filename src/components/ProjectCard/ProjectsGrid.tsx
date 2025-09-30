// src/components/ProjectsGrid.tsx
import React from "react";
import ProjectCard from "./ProjectCard";
import './ProjectCard.css'
import ws1 from '../../assets/wildstich-1.png'
import cs1 from '../../assets/codesync-1.png'
import ph1 from '../../assets/project-placeholder.jpg'
const projects = [
  {
    id: 1,
    title: "E-Commerce Clothing Website",
    description:
      "A full-stack online store with user authentication, product catalog, cart, and secure checkout. Built with Node.js, MongoDB, and React.js.",
    image: ws1,
    liveLink: "https://clothing-mern-client.vercel.app/",
    githubLink: "https://github.com/anujkaran12/CLOTHING-MERN-CLIENT",
    tech: ["Node.js", "Express", "MongoDB", "React.js", "JavaScript", "Stripe", "JWT"],
  },
  {
    id: 2,
    title: "Real-Time Collaborative Coding Dashboard with AI",
    description:
      "A platform for real-time collaborative coding with AI suggestions, live preview, and syntax highlighting. Built with React, TypeScript, and WebSockets.",
    image: cs1,
    liveLink: "https://real-time-collab-code-with-ai.vercel.app/",
    githubLink: "https://github.com/anujkaran12/REAL-TIME-COLLAB-CODE-WITH_AI",
    tech: ["React", "WebSockets", "TypeScript", "Node.js"],
  },
 {
  id: 3,
  title: "VideoTube Backend",
  description:
    "A backend service for a YouTube-like video platform featuring JWT authentication, video uploads, channel management, subscriptions, and user info APIs. Implemented advanced MongoDB aggregation pipelines for analytics and efficient data retrieval.",
  image: ph1,
  liveLink: "https://video-tube-server-ps72.onrender.com/", // optional if you want to deploy API docs (Swagger/Postman)
  githubLink: "https://github.com/anujkaran12/Video-Tube-Server", 
  tech: ["Aggregation Pipeline","Node.js", "Express", "MongoDB", "JWT"],
}
,
 
  
];


const ProjectsGrid: React.FC = () => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsGrid;
