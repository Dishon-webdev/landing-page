import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="container py-5">
      
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Hi, I'm Dishon</h1>
        <p className="lead text-muted">
          A passionate developer with a love for clean code, great design, and solving real-world problems.
        </p>
        <a href="#contact" className="btn btn-primary btn-lg mt-3">Contact Me</a>
      </header>

      
      <section className="mb-5">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center text-muted mx-auto" style={{ maxWidth: '700px' }}>
          I'm a software enthusiast who enjoys building responsive, performant web apps. I specialize in React, JavaScript,
          and modern frontend tools. When I'm not coding, I enjoy learning new tech and helping others grow.
        </p>
      </section>

      
      <section className="mb-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row text-center">
          {['React', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'Git'].map((skill, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{skill}</h5>
                  <p className="card-text">Experience in {skill} development and best practices.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section id="contact" className="text-center mt-5">
        <h2 className="mb-3">Let's Connect</h2>
        <p className="text-muted mb-4">Feel free to reach out via email or social media.</p>
        <a href="mailto:consalvesdishon16@gmail.com" className="btn btn-outline-secondary">
          Email Me
        </a>
      </section>
    </div>
  );
}
