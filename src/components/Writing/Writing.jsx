import { ClickableTile } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { articles } from '../../data/siteData';
import PreviewSection from '../PreviewSection/PreviewSection';
import './Writing.scss';

const ArticleCard = ({ article }) => (
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
);

const Writing = ({ preview = false, limit = 3 }) => (
  <PreviewSection
    id="writing"
    className="writing-section"
    title="Featured Articles"
    fullTitle="Articles"
    to="/writing"
    itemNoun="article"
    items={articles}
    preview={preview}
    limit={limit}
    gridClassName="writing-grid"
    renderItem={(article) => <ArticleCard article={article} />}
  />
);

export default Writing;
