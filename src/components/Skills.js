import React from "react";
import "./Skills.css";

const skills = [
  { icon: "⚡", name: "JavaScript", category: "Language" },
  { icon: "🐍", name: "Python", category: "Language" },
  { icon: "🐹", name: "Go", category: "Language" },
  { icon: "⚛️", name: "React", category: "Frontend" },
  { icon: "🌐", name: "HTML & CSS", category: "Frontend" },
  { icon: "🚀", name: "Node.js", category: "Backend" },
  { icon: "🌶️", name: "Flask", category: "Backend" },
  { icon: "🛢️", name: "Redis", category: "Backend" },
  { icon: "🐘", name: "PostgreSQL", category: "Database" },
  { icon: "☁️", name: "AWS", category: "Cloud" },
  { icon: "🔧", name: "FlaskAdmin", category: "Backend" },
  { icon: "🎨", name: "TailwindCSS", category: "Frontend" },
];

const Skills = () => {
  return (
    <section id="about" className="skills-section">
      <span className="section-label">{"// ABOUT"}</span>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-pill">
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
