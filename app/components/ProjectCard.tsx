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
    },
    projectFoot: {
      marginTop: '22%',
      display: 'flex',
      gap: '80px',
      justifyContent: 'space-between',
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
    },
    paragraph: {
      fontSize: '16px',
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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
        <h1 style={styles.header1}>{title}</h1>
        <h2 style={styles.header2}>{techStack}</h2>
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
