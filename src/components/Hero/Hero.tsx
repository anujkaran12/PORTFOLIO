import React, { useEffect, useState, type FC } from "react";
import "./Hero.css";
import profilepic from "../../assets/profile.jpg";

interface heroProp {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const Hero: FC<heroProp> = ({ currentTab, setCurrentTab }) => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
  
      <section className="hero">
        {/* Top Row */}
        <div className="hero-top">
          <div className="avatar">
            <img src={profilepic} alt="Profile" />
          </div>

          <div className="hero-header">
            <h1 className="name">Hey, I'm Anuj karan</h1>
            <p className="role">
              Software Engineer & Fullstack developer
              <br />
              anujkaran12082004@gmail.com
            </p>

            <div className="social-icons">
              <a
                href="https://linkedin.com/in/anuj-karan-b14a45252"
                target="_blank"
              >
                <i
                  className="bi bi-linkedin"
                  title="https://linkedin.com/in/anuj-karan-b14a45252"
                ></i>
              </a>

              <a href="https://github.com/anujkaran12/" target="_blank">
                <i
                  className="bi bi-github"
                  title="https://github.com/anujkaran12/"
                ></i>
              </a>
            </div>
          </div>
        </div>

       

        {/* Buttons */}
        <div className="buttons">
          <a className="download-btn" href='/Anuj_Karan_Resume.pdf' download>
            Download Resume <i className="bi bi-download"></i>
          </a>
          <button
            className="icon-btn"
            onClick={() => setDarkMode((mode) => !mode)}
          >
            {darkMode ? (
              <i className="bi bi-brightness-high"></i>
            ) : (
              <i className="bi bi-moon-stars"></i>
            )}
          </button>
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${currentTab === "projects" && "active"}`}
            onClick={() => setCurrentTab("projects")}
          >
            Portfolio
          </button>
          <button
            className={`tab ${currentTab === "certificates" && "active"}`}
            onClick={() => setCurrentTab("certificates")}
          >
            Certificates
          </button>
          <button
            className={`tab ${currentTab === "about" && "active"}`}
            onClick={() => setCurrentTab("about")}
          >
            About
          </button>
        </div>
      </section>
    
  );
};

export default Hero;
