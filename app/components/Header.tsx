'use client';
import { useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  useEffect(() => {
    console.log('Active Section changed:', activeSection);
  }, [activeSection]);

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
    return activeSection === section ? 'active' : ''; 
  };

  const styles: { [key: string]: React.CSSProperties } = {
    headersection: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '1.5vw', // Smaller font size
      fontWeight: 'bold',
      position: 'fixed',
      justifyContent: 'space-evenly', 
      top: '0',
      left: '0',
      height: '100%',
      width: '15%',
      zIndex: 1000,
      paddingLeft: '2%',
      boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'rgb(100, 100, 100)',
      overflowY: 'auto', // Prevents the header from overflowing vertically
    },
    headertext: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly', 
      height: '100%',
    },
    active: {
      color: '#5a189a',
      textDecoration: 'none',
    },
    link: {
      textDecoration: 'none',
      color: '#5a189a',
      fontSize: '1.2vw', // Slightly smaller font size for links
      whiteSpace: 'nowrap', // Prevents text from wrapping and causing overflow
    },
    content: {
      marginLeft: '18%', // Ensures content doesn't overlap with the fixed header
    },
  };

  return (
    <>
      <header style={styles.headersection}>
        <div style={styles.headertext}>
          {['home', 'about', 'projects', 'skills', 'experience'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`link ${getHeaderClass(section)}`}
              style={styles.link}
              onClick={() => setActiveSection(section)}
            >
              <h1 style={activeSection === section ? styles.active : {}}>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
            </a>
          ))}
        </div>
      </header>
      {/* Adjusting content area to not overlap with fixed header */}
      <div style={styles.content}>
        {/* Other content goes here */}
      </div>
    </>
  );
};

export default Header;
