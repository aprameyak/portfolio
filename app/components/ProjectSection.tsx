'use client';
import ProjectCard from './ProjectCard';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      title: 'FitSync',
      description:
        "Developed a MERN stack application for fitness goal tracking. Enabled user login with Google Cloud Platform Firebase Firestore authentication. Allowed users to enter fitness profiles and log nutrition and fitness data, which are written to MongoDB via Express.js middleware in the Node.js API. Conducted unit tests on API routes to ensure functionality and seamless integration with the frontend. Integrated a GPT-powered chatbot to offer personalized fitness advice. Displayed users' basal metabolic rate and calorie consumption and expenditure. Designed a simple, intuitive frontend using TypeScript, MaterialUI, and React.js hooks.",
      github: 'https://github.com/aprameyak/FitSync',
      techStack: 'Node.js, Express.js, Next.js, React.js, JavaScript, Typescript, MaterialUI, MongoDB, AWS S3',
    },
    {
      title: 'LaughALot',
      description:
        "Developed a serverless Generative AI-powered joke generator leveraging OpenAI's GPT-4 model optimizing responses through fine-tuned parameters like temperature, top_p, and maxTokens via LangChain for contextual joke creation. Built a stateless JavaScript API with ternary GET/POST routes tested on Postman to create jokes on user-provided or general topics. Created a responsive and secure interface using React.js and MaterialUI for seamless experience authentication through Clerk, enabling login via identity federation. Designed CI/CD pipelines with GitHub Actions and Vercel to streamline code deployment with continuous integration and delivery.",
      github: 'https://github.com/aprameyak/LaughALot',
      techStack: 'React.js, Next.js, JavaScript, LangChain, MaterialUI, Clerk, Vercel',
      liveDemo: 'https://laughalot.vercel.app/',
    },
    {
      title: 'StockUp',
      description:
        "Designed and developed a functional kitchen pantry management system with full CRUD (Create, Read, Update, Delete) operations via a Google Cloud Platform Firebase NoSQL database. Built a RESTful JavaScript API to handle front-end interactions and synchronize real-time updates with the MaterialUI interface. Delivered a highly interactive experience by integrating real-time search, modal-based item addition, and bulk inventory updates as features to enhance the user experience.",
      github: 'https://github.com/aprameyak/KitchenPantryApp',
      techStack: 'React.js, Next.js, Firebase Firestore, Google Cloud Platform, MaterialUI',
      liveDemo: 'https://pantryapp-iota.vercel.app/?vercelToolbarCode=IULSuS2R3DuSkdh',
    },
    {
      title: 'ScoreMe',
      description:
        "Cleaned and analyzed a Kaggle CSV dataset containing student exam performance using Pandas, Matplotlib, and Seaborn in a Jupyter Notebook. Trained a Scikit-Learn linear regression model to predict student exam performance, achieving 98.8% accuracy, and used Pickle to save and load the trained model for reuse. Developed a React.js front-end interface that accepts user inputs and sends HTTP POST requests to a Flask API, to return dynamic exam performance predictions. Ensured smooth integration between the front-end and back-end by providing real-time exam score predictions ranging from 0 to 100.",
      github: 'https://github.com/aprameyak/PredictingStudentPerformance',
      techStack: 'Python, JavaScript, Flask, Scikit-Learn, Pandas, Matplotlib, Seaborn, Pickle, Jupyter',
    },
    {
      title: "New York Times' Wordle Game Clone",
      description:
        "Designed a FastAPI Python backend with CORS Middleware to ensure secure communication to the React.js front-end interface. Implemented a FastAPI HTTP GET route using the OpenAI API for GPT-3.5-turbo to generate random 5-letter words. Built a responsive interface to emulate Wordle's existing green, yellow, and grey feedback for user guesses and added functionality to reset games to start new games on demand.",
      github: "https://github.com/aprameyak/WordleClone",
      techStack: "Python, FastAPI, React.js, JavaScript, CORS Middleware",
    },
    {
      title: 'Car Safety Classifier',
      description:
        "Extracted and cleaned data from a Kaggle CSV file, preparing a dataset containing car features using a Pandas dataframe in a Jupyter Notebook. Utilized Numpy, Seaborn, and Matplotlib to visualize and analyze key features related to car safety, uncovering valuable insights for model improvement. Built and trained a Random Forest Classifier model using Scikit-Learn, optimizing the model by achieving 94.6% accuracy with 100 decision trees using K-Nearest Neighbors (KNN) to further improve classification results and refine model predictions.",
      github: 'https://github.com/aprameyak/CarSafetyClassifier',
      techStack: 'Python, Scikit-Learn, Matplotlib, Pandas, Seaborn, Numpy, Jupyter',
    },
    {
      title: 'Streaming Platform Data Visualization',
      description:
        "Analyzed a Kaggle dataset about the most streamed songs across platforms using Python with Pandas and Matplotlib. Cleaned the dataset by filling missing values in the playlist count columns for each platform to ensure complete data for analysis. Used Pearson correlation to measure the relationship between track scores and playlist counts across three platforms: Apple Music, Amazon, and Deezer. Created a line plot to compare the number of playlists containing a song on each platform against its track score with the Pearson correlation coefficients to highlight the strength of the relationships between track score and playlist count for each platform.",
      github: 'https://github.com/aprameyak/MusicStreams',
      techStack: 'Python, Pandas, Matplotlib, SciPy',
    },
    {
      title: 'Computer Vision Image Labeller',
      description:
        "Developed a Python script to analyze image files stored in AWS S3 buckets, utilizing AWS Rekognition for image label detection. Configured AWS CLI with IAM permissions to enable secure and efficient execution of the script locally. Implemented functionality to detect up to 10 labels per image with a minimum confidence level of 80%, enhancing accuracy in classification. Automated the processing and classification of image data, demonstrating scalability and reliability in handling computer vision workflows.",
      github: 'https://github.com/aprameyak/ComputerVisionRekognition',
      techStack: 'Python, AWS SDK (boto3), AWS Rekognition, AWS S3, AWS IAM',
      documentation: 'https://medium.com/aws-tip/aws-rekognition-for-image-analysis-7533a712abc8',
    },
    {
      title: 'Stock Price Emailer',
      description:
        "Utilized a Node.js script to get stock price data from an API within an AWS Lambda function and invoke AWS SES via API calls. Created an execution role for the AWS Lambda function using an AWS IAM policy attached to an AWS IAM role using least privilege. Planned an AWS Eventbridge scheduler to invoke the AWS Lambda function daily to send stock price data to my inbox everyday.",
      github: 'https://github.com/aprameyak/StockPriceEmailer',
      techStack: 'Node.js, AWS Lambda, AWS IAM, AWS SES, AWS Eventbridge',
      documentation: 'https://medium.com/aws-tip/automate-stock-price-emails-with-aws-and-node-js-21cc7d8e9bba',
    },
  ];

  const styles: { [key: string]: React.CSSProperties } = {
    myProjects: {
      fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
      fontSize: 'large',
      fontWeight: 'normal',
      backgroundColor: 'rgb(67, 67, 67)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      padding: '0',
      minHeight: '100vh',
      overflowY: 'auto',
      scrollSnapType: 'y mandatory',
      paddingTop: '120px',
      paddingLeft: '17%', // Added padding to avoid overlap with the header
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
    },
  };

  return (
    <section id="projects" style={styles.myProjects}>
      <div style={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            github={project.github}
            techStack={project.techStack}
            documentation={project.documentation}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;