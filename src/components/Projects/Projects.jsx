import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Column, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { projects, projectStatusConfig } from '../../data/siteData';
import './Projects.scss';

const Projects = ({ preview = false, limit = 3 }) => {
  const displayProjects = preview ? projects.slice(0, limit) : projects;
  const totalCount = projects.length;
  const showingCount = displayProjects.length;

  return (
    <section id="projects" className="projects-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="section-header">
            <div className="section-header__title-group">
              <h2 className="section-title">{preview ? 'Featured Projects' : 'Projects'}</h2>
              {preview && (
                <span className="section-count-badge">
                  Showing {showingCount} of {totalCount}
                </span>
              )}
            </div>
            {preview && (
              <Button
                as={Link}
                to="/projects"
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                iconDescription="View all projects"
              >
                View All Projects
              </Button>
            )}
          </div>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="projects-grid">
            {displayProjects.map((project) => (
              <ExpandableTile
                key={project.id}
                id={project.id}
                className="project-tile"
                tileCollapsedIconText="Expand to see details"
                tileExpandedIconText="Collapse details"
              >
                <TileAboveTheFoldContent>
                  <div className="project-tile__header">
                    <h3 className="project-tile__title">{project.title}</h3>
                    <div className="project-tile__badges">
                      {project.isIBMInternal && (
                        <Tag type="red" size="md" className="ibm-internal-tag">
                          IBM Internal
                        </Tag>
                      )}
                      <Tag
                        type={projectStatusConfig[project.status]?.color || 'cool-gray'}
                        size="md"
                      >
                        {project.status}
                      </Tag>
                    </div>
                  </div>
                  <p className="project-tile__description">{project.description}</p>
                  <div className="project-tile__tech-stack">
                    {project.techStack.map((tech, index) => (
                      <Tag key={index} type="purple" size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  <div className="project-tile__details">
                    <h4 className="project-tile__details-title">Key Features:</h4>
                    <ul className="project-tile__details-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-tile__actions">
                      <Button kind="primary" size="sm" href={project.githubUrl}>
                        View on GitHub
                      </Button>
                      <Button kind="secondary" size="sm" href={project.demoUrl}>
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </TileBelowTheFoldContent>
              </ExpandableTile>
            ))}
          </div>
          {preview && (
            <div className="view-all-container">
              <div className="view-all-divider">
                <span className="view-all-divider__text">
                  {totalCount - showingCount} more project{totalCount - showingCount !== 1 ? 's' : ''} available
                </span>
              </div>
              <Button
                as={Link}
                to="/projects"
                kind="primary"
                size="lg"
                renderIcon={ArrowRight}
                iconDescription="View all projects"
                className="view-all-button"
              >
                View All {totalCount} Projects
              </Button>
            </div>
          )}
        </Column>
      </Grid>
    </section>
  );
};

export default Projects;

// Made with Bob
