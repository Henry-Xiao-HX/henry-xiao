import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioHeader from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WritingPage from './pages/WritingPage';
import './styles/styles.scss';

function App() {
  return (
    <div className="portfolio-app">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Router>
        <PortfolioHeader />
        <main id="main-content" className="portfolio-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/writing" element={<WritingPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

// Made with Bob
