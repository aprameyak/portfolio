'use client'
import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import HomeSection from './components/HomeSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';
import Skills from './components/Skills.tsx';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile && <Header activeSection={activeSection} setActiveSection={setActiveSection} />}
      <div>
        <HomeSection />
        <AboutSection/>
        <ProjectSection/>
        <Skills/>
        <ExperienceSection/>
      </div>
    </div>
  );
}
