// src/components/AboutSection.tsx
import React, { useEffect, useState } from "react";
import "./AboutSection.css";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "Vite",
  "Redux Toolkit",
  "Express.js",
  "Git/GitHub",
  "REST APIs",
];

const education = [
  {
    degree: "B.Tech in Information Technology",
    school: "ITM University, Gwalior",
    year: "2022 - Present",
  },
];

const counters = [
  { label: "Fullstack Projects Completed", value: 3 },
//   { label: "Hackathons & Competitions", value: 2 },
  { label: "Certifications", value: 3 },
  { label: "Courses Completed", value: 5 },
];

const AboutSection: React.FC = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, idx) => {
      let start = 0;
      const end = counter.value;
      const increment = Math.ceil(end / 50);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[idx] = start;
          return updated;
        });
      }, 30);
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Animated Counters */}
        <div className="about-counters">
          {counters.map((counter, idx) => (
            <div key={idx} className="counter-card">
              <span className="counter-number">{counts[idx]}</span>
              <span className="counter-label">{counter.label}</span>
            </div>
          ))}
        </div>

        {/* About Me */}
        <p className="about-description">
          I am a passionate and motivated fresher with a strong interest in{" "}
          <strong>web development</strong> and <strong>problem-solving</strong>.
          My journey so far has been driven by curiosity and hands-on learning,
          where I have built projects ranging from{" "}
          <em>e-commerce platforms</em> to{" "}
          <em>real-time collaborative applications</em>.
        </p>

        <p className="about-description">
          I enjoy working across the stack, focusing on clean code, performance,
          and user-friendly design. Currently, I am sharpening my skills in{" "}
          <strong>React, TypeScript, Node.js, and cloud deployment</strong>,
          while also exploring areas like <strong>AI integration</strong> and{" "}
          <strong>scalable backend systems</strong>.
        </p>

        {/* Education */}
        <h3 className="about-subtitle">Education</h3>
        <ul className="education-list">
          {education.map((edu, idx) => (
            <li key={idx} className="education-item">
              <strong>{edu.degree}</strong>, {edu.school}{" "}
              <span className="education-year">({edu.year})</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <h3 className="about-subtitle">Skills</h3>
        <div className="about-skills">
          {skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>

        {/* Career Goals */}
        <h3 className="about-subtitle">Career Goals</h3>
        <p className="about-description">
          My goal is to grow as a <strong>Fullstack Developer</strong> by
          contributing to impactful projects, learning from real-world
          challenges, and eventually specializing in{" "}
          <em>scalable backend architecture</em> and{" "}
          <em>AI-powered web applications</em>.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
