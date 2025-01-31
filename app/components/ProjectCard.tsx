import React from 'react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  github: string;
  techStack: string;
  documentation?: string;
  liveDemo?: string;
}> = ({ title, description, github, techStack, documentation, liveDemo }) => {
  const styles: { [key: string]: React.CSSProperties } = {
    projectCard: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '12px',
      padding: '5%',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      width: '90%',
      maxWidth: '800px',
      backgroundColor: 'white',
      position: 'relative',
      margin: 'auto',
    },
    projectFoot: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      flexWrap: 'wrap',
      marginTop: '10px',
    },
    projectLink: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      textDecoration: 'none',
      color: '#5a189a',
      fontWeight: 'bold',
      padding: '8px 12px',
      borderRadius: '6px',
      border: '1px solid #5a189a',
      transition: 'all 0.3s ease-in-out',
    },
    projectLinkHover: {
      backgroundColor: '#5a189a',
      color: 'white',
    },
    header1: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      color: '#9d4edd',
      textAlign: 'center',
    },
    header2: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      color: '#c77dff',
      marginTop: '-5px',
      textAlign: 'center',
    },
    projectHeader: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '8px',
    },
    paragraph: {
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      flexGrow: 1,
      textAlign: 'center',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.projectCard}>
      <div style={styles.projectHeader}>
        <h1 style={styles.header1}>{title}</h1>
        <h2 style={styles.header2}>{techStack}</h2>
      </div>
      <p style={styles.paragraph}>{description}</p>
      <div style={styles.projectFoot}>
        <a href={github} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
          GitHub
        </a>
        {documentation && (
          <a href={documentation} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
            Documentation
          </a>
        )}
        {liveDemo && (
          <a href={liveDemo} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
