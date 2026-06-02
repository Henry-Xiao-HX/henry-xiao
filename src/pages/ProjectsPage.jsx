import React from 'react';
import { Grid, Column, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag, Button, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import { projects, projectStatusConfig } from '../data/siteData';
import './ProjectsPage.scss';

const ProjectsPage = () => {

  return (
    <div className="projects-page">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash className="projects-page__breadcrumb">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Projects</BreadcrumbItem>
          </Breadcrumb>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="projects-page__header">
            <h1 className="projects-page__title">Projects</h1>
            <p className="projects-page__subtitle">
              A collection of AI systems, data engineering tools, and enterprise solutions I've built.
              Each project demonstrates practical applications of modern AI and data technologies.
            </p>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="projects-page__grid">
            {projects.map((project) => (
              <ExpandableTile
                key={project.id}
                id={project.id}
                className="project-card"
                tileCollapsedIconText="Expand to see details"
                tileExpandedIconText="Collapse details"
              >
                <TileAboveTheFoldContent>
                  <div className="project-card__header">
                    <div className="project-card__title-row">
                      <h2 className="project-card__title">{project.title}</h2>
                      <span className="project-card__year">{project.year}</span>
                    </div>
                    <div className="project-card__badges">
                      {project.isIBMInternal && (
                        <Tag type="red" size="md" className="ibm-internal-tag">
                          IBM Internal
                        </Tag>
                      )}
                      <Tag
                        type={projectStatusConfig[project.status]?.color || 'cool-gray'}
                        size="md"
                        className="project-card__status"
                      >
                        {project.status}
                      </Tag>
                    </div>
                  </div>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tech-stack">
                    {project.techStack.map((tech, index) => (
                      <Tag key={index} type="purple" size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  <div className="project-card__details">
                    <h3 className="project-card__details-title">Key Features:</h3>
                    <ul className="project-card__details-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-card__actions">
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
    </div>
  );
};

export default ProjectsPage;

// Made with Bob
