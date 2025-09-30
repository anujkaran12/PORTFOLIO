import Hero from "./components/Hero/Hero";
import "./App.css";
// import ProjectCard from './components/ProjectCard/ProjectCard';

import CertificatesGrid from "./components/Certificates/CertificatesGrid";
import { useState } from "react";
import ProjectsGrid from "./components/ProjectCard/ProjectsGrid";
import AboutSection from "./components/AboutSection/AboutSection";
function App() {
  const [currentTab, setCurrentTab] = useState<string>("projects");

  return (
    <div className="App">
      <Hero currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <section className="projects-section">
        {/* <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div> */}
        {currentTab === "projects" ? (
          <ProjectsGrid />
        ) : currentTab === "certificates" ? (
          <CertificatesGrid />
        ) : (
          <AboutSection />
        )}
      </section>
    </div>
  );
}

export default App;
