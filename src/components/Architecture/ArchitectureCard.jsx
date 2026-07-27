import { Tile, Tag } from '@carbon/react';

const ArchitectureCard = ({ diagram, className = '' }) => (
  <Tile className={`architecture-card ${className}`}>
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
        {diagram.tags.map((tag) => (
          <Tag key={tag} type="purple" size="sm">
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  </Tile>
);

export default ArchitectureCard;

// Made with Bob
