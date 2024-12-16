'use client';
import { useEffect } from 'react';
import '../style/headerstyles.css';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section'); 
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  const getHeaderClass = (section: string): string => {
    const isActive = activeSection === section;
    return isActive ? 'active' : '';
  };

  const styles: { [key: string]: React.CSSProperties } = {
    headersection: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 'medium',
      fontWeight: 'bold',
      justifyContent: 'space-between',
      position: 'fixed',
      top: '0',
      left: '0',
      height: '100vh',
      width: '200px',
      zIndex: 1000,
      paddingLeft: '1%',
      paddingTop: '5%',
      paddingBottom: '5%',
      boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgb(100, 100, 100)',
    },
    active: {
      textShadow: '0 0 10px rgba(255, 0, 255, 0.8), 0 0 20px rgba(255, 0, 255, 0.8), 0 0 30px rgba(255, 0, 255, 0.8)',
      color: 'white',
    },
    link: {
      textDecoration: 'none',
      color: '#5a189a',
    },
  };

  return (
    <header style={styles.headersection}>
      <a
        href="#home"
        className={`link ${getHeaderClass('home')}`}
        style={styles.link}
        onClick={() => setActiveSection('home')}
      >
        <h1>Home</h1>
      </a>
      <a
        href="#about"
        className={`link ${getHeaderClass('about')}`}
        style={styles.link}
        onClick={() => setActiveSection('about')}
      >
        <h1>About</h1>
      </a>
      <a
        href="#projects"
        className={`link ${getHeaderClass('projects')}`}
        style={styles.link}
        onClick={() => setActiveSection('projects')}
      >
        <h1>Projects</h1>
      </a>
      <a
        href="#experience"
        className={`link ${getHeaderClass('experience')}`}
        style={styles.link}
        onClick={() => setActiveSection('experience')}
      >
        <h1>Experience</h1>
      </a>
    </header>
  );
};

export default Header;
