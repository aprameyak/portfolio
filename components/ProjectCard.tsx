import React from 'react';
import '../style/projectcardstyles.css';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  github: string;
  techStack: string;
  documentation?: string;
  liveDemo?: string;
}> = ({ title, description, github, techStack, documentation, liveDemo }) => {
  return (
    <div 
    className="project-card"
    >
      <div 
      className='projectbody'
      >
        <h1 
        className="color4"
        >
          {title}
        </h1>
        <h2 
        className="color1"
        >
          {techStack}
        </h2>
        <p>
          {description}
        </p>
      </div>
      <div 
      className="projectfoot color2"
      >
        <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        >
          GitHub
        </a>
        {documentation && (
          <a 
          href={documentation} 
          target="_blank" 
          rel="noopener noreferrer"
          >
            Documentation
          </a>
        )}
        {liveDemo && (
          <a 
          href={liveDemo} 
          target="_blank" 
          rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
