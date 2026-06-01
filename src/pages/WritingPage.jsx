import React from 'react';
import { Grid, Column, ClickableTile, Breadcrumb, BreadcrumbItem, Tag } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { articles } from '../data/siteData';
import './WritingPage.scss';

const WritingPage = () => {

  const getStatusColor = (status) => {
    const statusMap = {
      'published': 'green',
      'draft': 'gray',
      'in-review': 'blue',
    };
    return statusMap[status] || 'gray';
  };

  return (
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

        <Column lg={16} md={8} sm={4}>
          <div className="writing-page__grid">
            {articles.map((article) => (
              <ClickableTile
                key={article.id}
                id={article.id}
                className="article-card"
                href={article.url}
              >
                <div className="article-card__content">
                  <div className="article-card__header">
                    <h2 className="article-card__title">{article.title}</h2>
                    <Tag type={getStatusColor(article.status)} size="sm" className="article-card__status">
                      {article.status}
                    </Tag>
                  </div>
                  
                  <div className="article-card__meta">
                    <span className="article-card__date">{article.date}</span>
                    <span className="article-card__separator">•</span>
                    <span className="article-card__read-time">{article.readTime} read</span>
                  </div>
                  
                  <p className="article-card__excerpt">{article.excerpt}</p>
                  
                  <div className="article-card__tags">
                    {article.tags.map((tag, index) => (
                      <Tag key={index} type="cool-gray" size="sm">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  
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
    </div>
  );
};

export default WritingPage;

// Made with Bob
