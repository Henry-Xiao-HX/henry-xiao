import React from 'react';
import { Grid, Column, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag, Button } from '@carbon/react';
import { projects } from '../../data/siteData';
import './Projects.scss';

const Projects = () => {

  return (
    <section id="projects" className="projects-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Projects</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="projects-grid">
            {projects.map((project) => (
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
                      <Tag type="cool-gray" size="md">
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
        </Column>
      </Grid>
    </section>
  );
};

export default Projects;

// Made with Bob
