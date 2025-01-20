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
    'AWS CodePipeline'
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
      padding: '50px 20px',
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      boxSizing: 'border-box',
      height: '100vh',
      marginLeft: '200px',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '40px',
      color: '#e0aaff',
      fontWeight: 'bold',
    },
    skillsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
    },
    skillCard: {
      backgroundColor: '#5a189a',
      padding: '15px 20px',
      borderRadius: '8px',
      textTransform: 'capitalize',
      fontSize: '1.1rem',
      color: '#f1faee',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease-in-out',
    },
    skillCardHover: {
      backgroundColor: '#e63946',
      transform: 'scale(1.1)',
    },
  };

  return (
    <section id="skills" style={styles.section}>
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
