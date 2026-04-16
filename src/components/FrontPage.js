import React from "react";
import yannick from ".././profile.jpg";
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <>
      <nav className="nav">
        <span className="nav-logo">YW</span>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <span className="available-badge">● Available for new opportunities</span>
          <h1 className="hero-title">Hello!</h1>
          <p className="hero-bio">
            I'm an engineer at the intersection of code and customer outcomes. With a background bridging sales, support, and full-stack engineering, I write SQL, ship React interfaces, and design the workflows that hold products together. Based in Brooklyn. Looking for my next build.
          </p>
          <div className="hero-stats">
            <span className="stat-badge">⚡ Full-Stack</span>
            <span className="stat-badge">📍 NYC</span>
          </div>
          <div className="hero-ctas">
            <a href="#work" className="btn btn-primary">View Portfolio</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={yannick} alt="Yannick" className="hero-img" />
        </div>
      </section>
    </>
  );
};

export default FrontPage;
