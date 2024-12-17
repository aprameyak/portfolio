import React, { useState } from 'react';

const ExperienceCard: React.FC<{
  name: string;
  title: string;
  description: string;
  picture: string;
  picturelink: string;
}> = ({ name, title, description, picture, picturelink }) => {
  const [hover, setHover] = useState(false);

  const styles: { [key: string]: React.CSSProperties } = {
    experienceCard: {
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '800px',
      height: '450px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      borderRadius: '8px',
    },
    experienceBody: {
      textAlign: 'center',
      marginBottom: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    experienceFoot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    experienceFootImg: {
      width: '100px',
      height: '100px',
      borderRadius: '4px',
      transition: 'transform 0.2s',
      transform: hover ? 'scale(1.1)' : 'scale(1)',
    },
    color1: {
      color: '#c77dff',
    },
    color4: {
      color: '#9d4edd',
    },
  };

  return (
    <div style={styles.experienceCard}>
      <div style={styles.experienceBody}>
        <h1 style={styles.color4}>{name}</h1>
        <h2 style={styles.color1}>{title}</h2>
        <p>{description}</p>
      </div>
      <div style={styles.experienceFoot}>
        <a href={picturelink} target="_blank" rel="noopener noreferrer">
          <img
            src={picture}
            alt={`${name} - ${title}`}
            style={styles.experienceFootImg}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default ExperienceCard;
