import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

export default function App() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (

    
    <div className="container">

      
      {/* HERO */}
      <header className="text-center py-5">
        <h1 className="display-2 fw-bold mb-3">
          Hi, I'm <span className="text-primary">Dishon</span>
        </h1>
        <p className="fs-4 text-muted mb-4 px-2 px-md-5">
          I craft beautiful, fast, and responsive websites using{" "}
          <strong>React</strong>, <strong>Bootstrap</strong>, and{" "}
          <strong>CSS</strong> — with clean code and sleek design.
        </p>
        <a
          href="#login"
          className="btn btn-lg btn-primary px-5 py-3 shadow rounded-pill"
        >
          Login
        </a>
      </header>

      <section id="about" className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6 mb-4 mb-md-0">
        <img
          src={profilePic}
          alt="Profile"
          className="img-fluid rounded-4 shadow-lg border border-3 border-primary"
        />
      </div>
      <div className="col-md-6">
        <h2 className="mb-3 fw-bold text-primary">About Me</h2>
        <p className="lead text-muted">
          I’m <strong>Dishon</strong>, a web developer who creates clean, responsive, and
          user-centric websites using <strong>React</strong>, <strong>Bootstrap</strong>, and <strong>CSS</strong>.
          I love transforming ideas into elegant digital experiences.
        </p>
        <p className="text-muted">
          My focus is on performance, design, and accessibility — bringing beauty and function together in every project.
        </p>
      </div>
    </div>
  </div>
</section>


      <section id="skills">
        <div className="container">
          <h2 className="text-center mb-5">My Skills</h2>
          <div className="row text-center">
            {[
              { icon: "💻", label: "HTML5 & CSS3" },
              { icon: "⚛️", label: "React JS" },
              { icon: "🎨", label: "Bootstrap" },
              { icon: "🧠", label: "JavaScript" },
              { icon: "📦", label: "Node.js" },
              { icon: "🗄️", label: "MySQL" },
            ].map((skill, idx) => (
              <div className="col-6 col-md-4 mb-4" key={idx}>
                <div className="skill-box p-4 shadow rounded-4 h-100">
                  <div className="fs-1 mb-3">{skill.icon}</div>
                  <h5>{skill.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section id="projects" className="py-5 bg-white">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold text-primary">Projects</h2>
    <div className="row">
      {[
        {
          title: 'Portfolio Website',
          desc: 'A modern personal site built with React & Bootstrap.',
          img: project1,
          link: 'https://dishon-webdev.github.io/Portfolio/'
        },
        {
          title: 'Weather App',
          desc: 'Real-time weather info using OpenWeather API.',
          img: project2,
          link: 'https://dishon-webdev.github.io/weather-app/'
        },
        {
          title: 'Tic Tac Toe Game',
          desc: 'Simple Tic Tac Toe built using JavaScript.',
          img: project3,
          link: 'https://dishon-webdev.github.io/Tic-Tac-Toe/'
        }
      ].map((project, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <div className="card project-card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
            <img
              src={project.img}
              className="card-img-top"
              alt={project.title}
              style={{ height: '220px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title fw-semibold">{project.title}</h5>
              <p className="card-text text-muted">{project.desc}</p>
              <a
                href={project.link}
                className="btn btn-outline-primary mt-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* LOGIN */}
<motion.section
  id="login"
  className="login-section py-5"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-5">
        <div className="card shadow-lg rounded-4 border-0 p-4">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Login</h2>
            <p className="text-muted">Access your account to explore more</p>
          </div>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-medium">Email address</label>
              <input type="email" className="form-control rounded-3" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-medium">Password</label>
              <input type="password" className="form-control rounded-3" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-3 fw-semibold">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</motion.section>

<footer className="footer bg-dark text-light py-4 mt-5">
  <div className="container text-center">
    <p className="mb-3">&copy; {new Date().getFullYear()} Dishon. All rights reserved.</p>
    <div className="d-flex justify-content-center gap-4">
      <a
        href="https://github.com/Dishon-webdev"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
        aria-label="GitHub"
      >
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" className="footer-icon" />
      </a>
      <a
        href="https://linkedin.com/in/your-linkedin-username"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon-link"
        aria-label="LinkedIn"
      >
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" className="footer-icon" />
      </a>
      <a
        href="mailto:consalvesdishon16@gmail.com"
        className="footer-icon-link"
        aria-label="Email"
      >
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Email" className="footer-icon" />
      </a>
    </div>
  </div>
</footer>


    </div>
  );
}
