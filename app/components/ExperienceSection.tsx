'use client';
import ExperienceCard from './ExperienceCard';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      name: 'Syntag',
      title: 'Software Engineer',
      description:
        'Developed and deployed scalable NLP-based AI receptionist agents using Azure AKS (Azure Kubernetes Service), leveraging the Deepngram transcriber for real-time transcription and processing. Designed and implemented a Python FastAPI backend to effectively distribute load from WebSocket API requests, preventing throttling and ensuring a seamless user experience even under high traffic. Redesigned the user interface with a focus on both aesthetics and functionality, utilizing Tailwind CSS for rapid, responsive styling and TypeScript with React.js to accurately translate a Figma wireframe into a polished, user-friendly web application.',
      picture: 'https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/syntag.jpg',
      picturelink: 'https://www.syntag.ai/',
    },
    {
      name: 'Minvest',
      title: 'Software Development Engineer',
      description:
        'Tested React.js, ChakraUI, and TypeScript, using organized Git source control actions to communicate progress on AGILE sprint deadlines. Leveraged Amazon Web Services (AWS) cloud infrastructure with ECR, ECS, and EC2, to decrease costs by 30% while hosting decoupled components as Docker images. Designed an interactive frontend that updated user metadata through a point system as part of a gamification initiative, resulting in a 40% boost in user engagement. Initialized a web application paper trading simulator, integrating a Python Flask API to retrieve and consistently update public stock data and user metadata.',
      picture: 'https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/minvest.jpg',
      picturelink: 'https://www.minvestfinance.com/'
    },
    {
      name: 'CodePath',
      title: 'Technical Interview Prep Student',
      description:
        'Completed an intensive 10-week Technical Interview Prep program, with a focus on strengthening problem-solving skills and preparing for technical interviews at top tech companies. The program emphasized fundamental concepts such as arrays, linked lists, trees, graphs, dynamic programming, and sorting algorithms, with all solutions implemented and optimized in Python. It included weekly coding assignments, timed mock interviews, and collaborative peer-learning sessions, developing the ability to tackle complex technical problems effectively under time constraints.',
      picture: 'https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/codepath.jpg',
      picturelink: 'https://www.codepath.org/',
    },
    {
      name: 'Headstarter',
      title: 'Software Engineering Fellow',
      description:
        'Collaborated with a team of engineers, designers, and AI experts to develop AI-powered software solutions. Contributed to the design and optimization of algorithms to improve efficiency and performance. Utilized Python, JavaScript, and cloud-based platforms to build scalable, reliable software systems. Worked with cross-functional teams to integrate AI solutions into real-world use cases. Participated in code reviews and fostered a culture of continuous improvement and learning. Enhanced problem-solving skills and deepened understanding of AI in software development.',
      picture: 'https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/headstarter.jpg',
      picturelink: 'https://headstarter.co/',
    },
    { 
      name: 'Amazon Web Services',
      title: 'Certified Solutions Architect',
      description:
        'Proficiency in designing and deploying scalable, highly available, and fault-tolerant systems on Amazon Web Services (AWS) that meet both technical and business requirements. Skilled in selecting appropriate AWS services for various use cases and architecting secure, cost-efficient cloud infrastructures. Gained expertise in deploying and managing applications in the cloud, optimizing cost structures, and ensuring security best practices. Worked with AWS services including EC2, S3, RDS, Lambda, and VPC.',
      picture: 'https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/aws.jpg',
      picturelink: 'https://aws.amazon.com/?nc2=h_lg',
    },
  ];
  

  const styles: { [key: string]: React.CSSProperties } = {
    myexperience: {
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      fontSize: 'large',
      fontWeight: 'normal',
      backgroundColor: 'rgb(67, 67, 67)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      padding: '0',
      height: '100vh',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      paddingBottom: '20%',
      paddingTop: '20%',
    },
    experienceContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      width: '100%',
      height: '100vh',
      scrollSnapAlign: 'start',
      padding: '20px',
      boxSizing: 'border-box',
    },
  };

  return (
    <section id="experience" style={styles.myexperience}>
      {experiences.map((experience, index) => (
        <div key={index} style={styles.experienceContainer}>
          <ExperienceCard
            name={experience.name}
            title={experience.title}
            description={experience.description}
            picture={experience.picture}
            picturelink={experience.picturelink}
          />
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;