import React from 'react';
import { Grid, Column, ClickableTile, Breadcrumb, BreadcrumbItem, Tag } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import './WritingPage.scss';

const WritingPage = () => {
  const articles = [
    {
      id: 'metadata-context-engineering',
      title: 'Metadata-Driven Context Engineering',
      date: 'Coming Soon',
      readTime: '8 min',
      excerpt: 'How intelligent context management improves AI agents through metadata-driven approaches to data engineering workflows.',
      fullDescription: 'Exploring the intersection of metadata management and AI context engineering. This article discusses how structured metadata can enhance AI agent performance, improve data lineage tracking, and enable more intelligent decision-making in enterprise data workflows.',
      tags: ['AI', 'Data Engineering', 'Metadata', 'Context Management'],
      url: '#',
      status: 'draft',
    },
    {
      id: 'two-many-chefs',
      title: 'Two Many Chefs in the Kitchen',
      date: 'Coming Soon',
      readTime: '6 min',
      excerpt: 'Exploring the critical differences between demo AI systems and production-grade implementations in enterprise environments.',
      fullDescription: 'A deep dive into the challenges of moving AI systems from proof-of-concept to production. Learn about the architectural decisions, scalability considerations, and operational requirements that separate demos from production-ready AI solutions.',
      tags: ['AI', 'Production Systems', 'Enterprise', 'Best Practices'],
      url: '#',
      status: 'draft',
    },
    {
      id: 'personal-chef-agent',
      title: 'Personal Chef Agent',
      date: 'Coming Soon',
      readTime: '10 min',
      excerpt: 'Building AI agents with conversation memory: A practical guide to implementing context-aware assistants.',
      fullDescription: 'A hands-on tutorial for building AI agents with persistent memory. This article covers conversation state management, context window optimization, and practical patterns for creating personalized AI assistants that remember user preferences and past interactions.',
      tags: ['AI Agents', 'LangChain', 'Memory Management', 'Tutorial'],
      url: '#',
      status: 'draft',
    },
    {
      id: 'llm-wiki-pattern',
      title: 'LLM Wiki Pattern',
      date: 'Coming Soon',
      readTime: '7 min',
      excerpt: 'Knowledge management patterns for AI systems: Structuring information for optimal retrieval and reasoning.',
      fullDescription: 'Introducing the LLM Wiki Pattern - a structured approach to organizing knowledge for AI systems. Learn how to design information architectures that enable efficient retrieval, maintain consistency, and support complex reasoning tasks in production AI applications.',
      tags: ['Knowledge Management', 'RAG', 'Information Architecture', 'AI Systems'],
      url: '#',
      status: 'draft',
    },
  ];

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
