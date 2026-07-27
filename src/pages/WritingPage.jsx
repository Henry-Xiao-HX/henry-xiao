import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import Writing from '../components/Writing/Writing';
import './WritingPage.scss';

const WritingPage = () => (
  <div className="writing-page">
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash className="writing-page__breadcrumb">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Writing</BreadcrumbItem>
        </Breadcrumb>
      </Column>

      <Column lg={16} md={8} sm={4}>
        <div className="writing-page__header">
          <h1 className="writing-page__title">Writing</h1>
          <p className="writing-page__subtitle">
            Technical articles and insights on AI systems, data engineering, and enterprise software development.
            Sharing lessons learned from building production AI solutions.
          </p>
        </div>
      </Column>
    </Grid>

    <Writing />
  </div>
);

export default WritingPage;

// Made with Bob
