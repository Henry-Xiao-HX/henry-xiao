import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Column, Tile, Tag, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { architectureDiagrams } from '../../data/siteData';
import './Architecture.scss';

const Architecture = ({ preview = false, limit = 3 }) => {
  const displayDiagrams = preview ? architectureDiagrams.slice(0, limit) : architectureDiagrams;
  const totalCount = architectureDiagrams.length;
  const showingCount = displayDiagrams.length;

  return (
    <section id="architecture" className="architecture-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="section-header">
            <div className="section-header__title-group">
              <h2 className="section-title">{preview ? 'Featured Architectures' : 'Architecture Diagrams'}</h2>
              {preview && (
                <span className="section-count-badge">
                  Showing {showingCount} of {totalCount}
                </span>
              )}
            </div>
            {preview && (
              <Button
                as={Link}
                to="/architecture"
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                iconDescription="View all architecture diagrams"
              >
                View All Architectures
              </Button>
            )}
          </div>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="architecture-grid">
            {displayDiagrams.map((diagram) => (
              <Tile key={diagram.id} className="architecture-card">
                <div className="architecture-card__image-container">
                  <img
                    src={diagram.image}
                    alt={diagram.title}
                    className="architecture-card__image"
                    loading="lazy"
                  />
                </div>
                <div className="architecture-card__content">
                  <div className="architecture-card__header">
                    <h3 className="architecture-card__title">{diagram.title}</h3>
                    <span className="architecture-card__date">{diagram.date}</span>
                  </div>
                  <p className="architecture-card__description">{diagram.description}</p>
                  <div className="architecture-card__tags">
                    {diagram.tags.map((tag, index) => (
                      <Tag key={index} type="purple" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Tile>
            ))}
          </div>
          {preview && (
            <div className="view-all-container">
              <div className="view-all-divider">
                <span className="view-all-divider__text">
                  {totalCount - showingCount} more architecture{totalCount - showingCount !== 1 ? 's' : ''} available
                </span>
              </div>
              <Button
                as={Link}
                to="/architecture"
                kind="primary"
                size="lg"
                renderIcon={ArrowRight}
                iconDescription="View all architecture diagrams"
                className="view-all-button"
              >
                View All {totalCount} Architectures
              </Button>
            </div>
          )}
        </Column>
      </Grid>
    </section>
  );
};

export default Architecture;

// Made with Bob