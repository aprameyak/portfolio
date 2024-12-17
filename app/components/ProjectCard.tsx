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
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      height: '450px',
      maxWidth: '800px',
      backgroundColor: 'white',
      position: 'relative',
    },
    projectFoot: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'absolute', 
      bottom: '16px',
      left: '16px', 
      right: '16px', 
      gap: '16px',
    },
    projectLink: {
      fontSize: '18px',
      textDecoration: 'none',
      position: 'relative',
      top: '90%',
    },
    header1: {
      fontSize: '24px',
      height: '80px',
      color: '#9d4edd', 
    },
    header2: {
      fontSize: '18px',
      height: '80px',
      color: '#c77dff', 
      marginTop: '-10%',
    },
    projectHeader: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 0, 
      gap: '4px', 
    },
    paragraph: {
      fontSize: '16px',
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      marginTop: '-5%',
    },
    color2: {
      color: '#e0aaff', 
    },
    color5: {
      color: '#5a189a',
    },
  };

  return (
    <div style={styles.projectCard}>
      <div style={styles.projectBody}>
        <div style={styles.projectHeader}>
          <h1 style={styles.header1}>{title}</h1>
          <h2 style={styles.header2}>{techStack}</h2>
        </div>
        <p style={styles.paragraph}>{description}</p>
      </div>
      <div style={styles.projectFoot}>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.projectLink}
        >
          GitHub
        </a>
        {documentation && (
          <a
            href={documentation}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.projectLink}
          >
            Documentation
          </a>
        )}
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.projectLink}
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
