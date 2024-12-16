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

  return (
    <header 
      className="headersection color5"
    >
      <a
        href="#home"
        className={`link ${getHeaderClass('home')}`}
        onClick={() => setActiveSection('home')}
      >
        <h1>
          Home
        </h1>
      </a>
      <a
        href="#about"
        className={`link ${getHeaderClass('about')}`}
        onClick={() => setActiveSection('about')}
      >
        <h1>
          About
        </h1>
      </a>
      <a
        href="#projects"
        className={`link ${getHeaderClass('projects')}`}
        onClick={() => setActiveSection('projects')}
      >
        <h1>
          Projects
        </h1>
      </a>
      <a
        href="#experience"
        className={`link ${getHeaderClass('experience')}`}
        onClick={() => setActiveSection('experience')}
      >
        <h1>
          Experience
        </h1>
      </a>
    </header>
  );
};

export default Header;
