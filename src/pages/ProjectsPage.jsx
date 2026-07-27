import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import Projects from '../components/Projects/Projects';
import './ProjectsPage.scss';

const ProjectsPage = () => (
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
            A collection of AI systems, data engineering tools, and enterprise solutions I&apos;ve built.
            Each project demonstrates practical applications of modern AI and data technologies.
          </p>
        </div>
      </Column>
    </Grid>

    <Projects />
  </div>
);

export default ProjectsPage;

// Made with Bob
