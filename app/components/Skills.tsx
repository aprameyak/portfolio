'use client';

import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'React.js', 
    'Node.js', 
    'Express.js',
    'Next.js',
    'TypeScript', 
    'Javascript',
    'HTML',
    'CSS',
    'Tailwind CSS', 
    'MaterialUI',
    'ChakraUI',
    'Python',
    'FastAPI',
    'Flask',
    'Java',
    'SQL',
    'Oracle',
    'MySQL',
    'MongoDB',
    'SQLite',
    'AWS ECS', 
    'AWS EC2', 
    'AWS ECR', 
    'AWS Lambda', 
    'AWS S3', 
    'AWS IAM', 
    'AWS Cloudformation',
    'AWS SES',
    'AWS EventBridge',
    'AWS API Gateway',
    'AWS DynamoDB',
    'AWS CodePipeline',
    'AWS Amplify',
    'AWS Cognito',
    'GCP Firebase',
    'Docker', 
    'Figma',
    'GitHub',
    'Visual Studio Code', 
    'RESTful APIs',
    'Websocket APIs',
    'CI/CD Pipelines',
    'AGILE Methodologies',
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    section: {
      backgroundColor: 'rgb(67, 67, 67)',
      padding: '5vw 3vw',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      boxSizing: 'border-box',
      minHeight: '100vh',
      marginLeft: '15%',
      marginRight: '0',
      width: '85%',
    },
    heading: {
      fontSize: '5vw',
      marginBottom: '5vw',
      color: '#e0aaff',
      fontWeight: 'bold',
    },
    skillsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 30%))',
      gap: '5vw',
      justifyContent: 'center',
    },
    skillCard: {
      backgroundColor: '#5a189a',
      padding: '3vw 4vw',
      borderRadius: '8px',
      textTransform: 'capitalize',
      fontSize: '1.5vw',
      color: '#f1faee',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-in-out',
    },
    skillCardHover: {
      backgroundColor: '#e63946',
      transform: 'scale(1.1)',
    },
  };

  const mobileStyles: React.CSSProperties = {
    ...styles.section,
    marginLeft: '0',
    width: '100%',
  };

  const tabletStyles: React.CSSProperties = {
    ...styles.section,
    marginLeft: '0',
    width: '100%',
  };

  return (
    <section id="skills" style={window.innerWidth <= 768 ? tabletStyles : mobileStyles}>
      <h2 style={styles.heading}>My Skills</h2>
      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            style={styles.skillCard}
            className="skill-card"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
