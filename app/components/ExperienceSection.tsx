'use client';
import React, { useState } from 'react';
import ExperienceCard from './ExperienceCard';
import '../style/experiencestyles.css';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      name: 'Syntag',
      title: 'Software Engineer',
      description:
        'Developed and deployed scalable NLP-based AI receptionist agents using Azure AKS (Azure Kubernetes Service), leveraging the Deepngram transcriber for real-time transcription and processing. Designed and implemented a Python FastAPI backend to effectively distribute load from WebSocket API requests, preventing throttling and ensuring a seamless user experience even under high traffic. Redesigned the user interface with a focus on both aesthetics and functionality, utilizing Tailwind CSS for rapid, responsive styling and TypeScript with React.js to accurately translate a Figma wireframe into a polished, user-friendly web application.',
      picture: '/syntag.jpg',
      picturelink: 'https://www.syntag.ai/',
    },
    {
      name: 'Minvest',
      title: 'Software Development Engineer',
      description:
        'Tested React.js, ChakraUI, and TypeScript, using organized Git source control actions to communicate progress on AGILE sprint deadlines. Leveraged Amazon Web Services (AWS) cloud infrastructure with ECR, ECS, and EC2, to decrease costs by 30% while hosting decoupled components as Docker images. Designed an interactive frontend that updated user metadata through a point system as part of a gamification initiative, resulting in a 40% boost in user engagement. Initialized a web application paper trading simulator, integrating a Python Flask API to retrieve and consistently update public stock data and user metadata.',
      picture: '/minvest.jpg',
      picturelink: 'https://www.minvestfinance.com/'
    },
    {
      name: 'CodePath',
      title: 'Technical Interview Prep Student',
      description:
        'Completed an intensive 10-week CodePath Technical Interview Prep program, with a focus on strengthening problem-solving skills and preparing for technical interviews at top tech companies. The program emphasized fundamental concepts such as arrays, linked lists, trees, graphs, dynamic programming, and sorting algorithms, with all solutions implemented and optimized in Python. It included weekly coding assignments, timed mock interviews, and collaborative peer-learning sessions, developing the ability to tackle complex technical problems effectively under time constraints.',
      picture: '/codepath.jpg',
      picturelink: 'https://www.codepath.org/',
    },
    {
      name: 'Headstarter',
      title: 'Software Engineering Fellow',
      description:
        'Collaborated with a team of engineers, designers, and AI experts to develop AI-powered software solutions. Contributed to the design and optimization of algorithms to improve efficiency and performance. Utilized Python, JavaScript, and cloud-based platforms to build scalable, reliable software systems. Worked with cross-functional teams to integrate AI solutions into real-world use cases. Participated in code reviews and fostered a culture of continuous improvement and learning. Enhanced problem-solving skills and deepened understanding of AI in software development.',
      picture: '/headstarter.jpg',
      picturelink: 'https://headstarter.co/',
    },
    { 

      name: 'Amazon Web Services',
      title: 'Certified Solutions Architect',
      description:
        'Proficiency in designing and deploying scalable, highly available, and fault-tolerant systems on Amazon Web Services (AWS) that meet both technical and business requirements. Skilled in selecting appropriate AWS services for various use cases and architecting secure, cost-efficient cloud infrastructures. Gained expertise in deploying and managing applications in the cloud, optimizing cost structures, and ensuring security best practices. Worked with AWS services including EC2, S3, RDS, Lambda, and VPC.',
      picture: '/aws.jpg',
      picturelink: 'https://aws.amazon.com/?nc2=h_lg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section 
      id="experience" 
      className="myexperience"
    >
      <div 
        className="carousel-container"
      >
        <button 
          className="arrow-btn up-arrow" 
          onClick={handlePrev}
        >
          &uarr;
        </button>
        <div 
          className="carousel-content"
        >
          <ExperienceCard
            name={experiences[currentIndex].name}
            title={experiences[currentIndex].title}
            description={experiences[currentIndex].description}
            picture={experiences[currentIndex].picture}
            picturelink={experiences[currentIndex].picturelink}
          />
        </div>
        <button 
          className="arrow-btn down-arrow" 
          onClick={handleNext}
        >
          &darr;
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
