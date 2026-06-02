import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Column, ClickableTile, Button } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { articles } from '../../data/siteData';
import './Writing.scss';

const Writing = ({ preview = false, limit = 3 }) => {
  const displayArticles = preview ? articles.slice(0, limit) : articles;

  return (
    <section id="writing" className="writing-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="section-header">
            <h2 className="section-title">{preview ? 'Featured Articles' : 'Articles'}</h2>
            {preview && (
              <Button
                as={Link}
                to="/writing"
                kind="tertiary"
                size="sm"
                renderIcon={ArrowRight}
                iconDescription="View all articles"
              >
                View All Articles
              </Button>
            )}
          </div>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="writing-grid">
            {displayArticles.map((article) => (
              <ClickableTile
                key={article.id}
                id={article.id}
                className="article-card"
                href={article.url}
              >
                <div className="article-card__content">
                  <h3 className="article-card__title">{article.title}</h3>
                  <div className="article-card__meta">
                    <span className="article-card__date">{article.date}</span>
                    <span className="article-card__separator">•</span>
                    <span className="article-card__read-time">{article.readTime} read</span>
                  </div>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  <div className="article-card__cta">
                    <span>Read Full Article</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </ClickableTile>
            ))}
          </div>
          {preview && (
            <div className="view-all-container">
              <Button
                as={Link}
                to="/writing"
                kind="tertiary"
                renderIcon={ArrowRight}
                iconDescription="View all articles"
              >
                View All Articles
              </Button>
            </div>
          )}
        </Column>
      </Grid>
    </section>
  );
};

export default Writing;

// Made with Bob
