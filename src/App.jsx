import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PortfolioHeader from './components/Header/Header';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WritingPage from './pages/WritingPage';
import ArchitecturePage from './pages/ArchitecturePage';
import { scrollToSection } from './utils/scrollToSection';
import './styles/styles.scss';

// Component to handle scrolling to hash sections
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    // HashRouter uses location.pathname for the route.
    // A section anchor is encoded as "/#sectionId", so it appears as
    // the second segment after splitting on '#'.
    const pathParts = location.pathname.split('#');

    if (pathParts.length > 1 && pathParts[1]) {
      scrollToSection(pathParts[1]);
    } else {
      // Scroll to top when navigating to a new page without a section anchor
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="portfolio-app">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Router>
        <ScrollToHashElement />
        <PortfolioHeader />
        <main id="main-content" className="portfolio-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/writing" element={<WritingPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

// Made with Bob
