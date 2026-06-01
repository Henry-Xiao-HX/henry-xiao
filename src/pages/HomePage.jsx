import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Expertise from '../components/Expertise/Expertise';
import Milestones from '../components/Milestones/Milestones';
import Projects from '../components/Projects/Projects';
import Writing from '../components/Writing/Writing';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Expertise />
      <Milestones />
      <Projects />
      <Writing />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;

// Made with Bob
