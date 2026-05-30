import React from 'react';
import { Grid, Column, ClickableTile } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './Writing.scss';

const Writing = () => {
  const articles = [
    {
      id: 'metadata-context-engineering',
      title: 'Metadata-Driven Context Engineering',
      date: 'Coming Soon',
      readTime: '8 min',
      excerpt: 'How intelligent context management improves AI agents through metadata-driven approaches to data engineering workflows.',
      url: '#',
    },
    {
      id: 'two-many-chefs',
      title: 'Two Many Chefs in the Kitchen',
      date: 'Coming Soon',
      readTime: '6 min',
      excerpt: 'Exploring the critical differences between demo AI systems and production-grade implementations in enterprise environments.',
      url: '#',
    },
    {
      id: 'personal-chef-agent',
      title: 'Personal Chef Agent',
      date: 'Coming Soon',
      readTime: '10 min',
      excerpt: 'Building AI agents with conversation memory: A practical guide to implementing context-aware assistants.',
      url: '#',
    },
    {
      id: 'llm-wiki-pattern',
      title: 'LLM Wiki Pattern',
      date: 'Coming Soon',
      readTime: '7 min',
      excerpt: 'Knowledge management patterns for AI systems: Structuring information for optimal retrieval and reasoning.',
      url: '#',
    },
  ];

  return (
    <section id="writing" className="writing-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Writing</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="writing-grid">
            {articles.map((article) => (
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
        </Column>
      </Grid>
    </section>
  );
};

export default Writing;

// Made with Bob
