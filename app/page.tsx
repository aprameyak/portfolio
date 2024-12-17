'use client'
import { useState } from 'react';
import Header from './components/Header.tsx';
import HomeSection from './components/HomeSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div>
        <HomeSection />
        <AboutSection/>
        <ProjectSection/>
        <ExperienceSection/>
      </div>
    </div>
  );
}
