import React from 'react';
import '../style/experiencecardstyles.css';

const ExperienceCard: React.FC<{
  name: string;
  title: string;
  description: string;
  picture: string; 
  picturelink: string;
}> = ({ name, title, description, picture, picturelink }) => {
  return (
    <div 
      className="experience-card"
    >
      <div 
        className="experiencebody"
      >
        <h1 
          className="color4"
        >
          {name}
        </h1>
        <h2 
          className="color1"
        >
          {title}
        </h2>
        <p>
          {description}
        </p>
      </div>
      <div 
        className="experiencefoot color2"
      >
        <a 
          href={picturelink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={picture} 
            alt={`${name} - ${title}`} 
          />
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
