import { Grid, Column, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import './PageLayout.scss';

/**
 * Shared layout wrapper used by all full-page routes.
 * Renders a breadcrumb, page title, subtitle, and any children below.
 *
 * Props:
 *   title       – <h1> text
 *   subtitle    – descriptive paragraph below the title
 *   crumb       – current page breadcrumb label (e.g. "Projects")
 *   children    – page-specific content rendered below the header
 *   headerExtra – optional ReactNode rendered beside the title/subtitle
 *                 (e.g. a view-toggle button group)
 */
const PageLayout = ({ title, subtitle, crumb, headerExtra, children }) => (
  <div className="page-layout">
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash className="page-layout__breadcrumb">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>{crumb}</BreadcrumbItem>
        </Breadcrumb>
      </Column>
      <Column lg={16} md={8} sm={4}>
        <div className={`page-layout__header${headerExtra ? ' page-layout__header--with-extra' : ''}`}>
          <div className="page-layout__header-content">
            <h1 className="page-layout__title">{title}</h1>
            <p className="page-layout__subtitle">{subtitle}</p>
          </div>
          {headerExtra && (
            <div className="page-layout__header-extra">{headerExtra}</div>
          )}
        </div>
      </Column>
    </Grid>
    {children}
  </div>
);

export default PageLayout;
