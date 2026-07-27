import { Link } from 'react-router-dom';
import { Grid, Column, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';

/**
 * Shared wrapper for homepage preview sections (Projects, Writing, Architecture).
 *
 * Props:
 *   id            – HTML section id for anchor scrolling
 *   className     – additional class applied to the <section>
 *   title         – heading in preview mode  ("Featured Projects")
 *   fullTitle     – heading on the full page ("Projects")
 *   to            – route for "View All" navigation
 *   itemNoun      – singular noun used in the "N more … available" label ("project")
 *   items         – full data array
 *   preview       – slice to `limit` and show "View All" UI when true
 *   limit         – max items shown in preview (default 3)
 *   renderItem    – (item) => ReactNode  (must set key on returned element)
 *   gridClassName – class applied to the items wrapper div
 */
const PreviewSection = ({
  id,
  className = '',
  title,
  fullTitle,
  to,
  itemNoun,
  items,
  preview = false,
  limit = 3,
  renderItem,
  gridClassName = '',
}) => {
  const displayItems = preview ? items.slice(0, limit) : items;
  const totalCount = items.length;
  const showingCount = displayItems.length;
  const remaining = totalCount - showingCount;
  const remainingLabel = `${remaining} more ${remaining !== 1 ? `${itemNoun}s` : itemNoun} available`;
  const viewAllLabel = `View All ${fullTitle}`;

  return (
    <section id={id} className={`portfolio-section ${className}`}>
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="section-header">
            <div className="section-header__title-group">
              <h2 className="section-title">{preview ? title : fullTitle}</h2>
              {preview && (
                <span className="section-count-badge">
                  Showing {showingCount} of {totalCount}
                </span>
              )}
            </div>
            {preview && (
              <Button
                as={Link}
                to={to}
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                iconDescription={viewAllLabel}
              >
                {viewAllLabel}
              </Button>
            )}
          </div>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className={gridClassName}>
            {displayItems.map(renderItem)}
          </div>
          {preview && (
            <div className="view-all-container">
              <div className="view-all-divider">
                <span className="view-all-divider__text">{remainingLabel}</span>
              </div>
              <Button
                as={Link}
                to={to}
                kind="primary"
                size="lg"
                renderIcon={ArrowRight}
                iconDescription={viewAllLabel}
                className="view-all-button"
              >
                {viewAllLabel} ({totalCount})
              </Button>
            </div>
          )}
        </Column>
      </Grid>
    </section>
  );
};

export default PreviewSection;
