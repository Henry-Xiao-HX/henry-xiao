import React from 'react';
import PortfolioHeader from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Projects from './components/Projects/Projects';
import Writing from './components/Writing/Writing';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './styles/styles.scss';

function App() {
  return (
    <div className="portfolio-app">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <PortfolioHeader />
      <main id="main-content" className="portfolio-container">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Writing />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

// Made with Bob
