import React, { useState } from 'react';
import {
  Grid,
  Column,
  Tile,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ProgressIndicator,
  ProgressStep
} from '@carbon/react';
import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
import { Link } from 'react-router-dom';
import { architectureDiagrams } from '../data/siteData';
import './ArchitecturePage.scss';

const ArchitecturePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? architectureDiagrams.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === architectureDiagrams.length - 1 ? 0 : prev + 1
    );
  };

  const handleStepClick = (index) => {
    setCurrentIndex(index);
  };

  const currentDiagram = architectureDiagrams[currentIndex];

  return (
    <div className="architecture-page">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash className="architecture-page__breadcrumb">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Architecture</BreadcrumbItem>
          </Breadcrumb>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="architecture-page__header">
            <div className="architecture-page__header-content">
              <h1 className="architecture-page__title">Architecture Diagrams</h1>
              <p className="architecture-page__subtitle">
                Visual representations of data integration, AI agent architectures, and enterprise solutions.
                Explore how Bob AI agents integrate with IBM data management tools to deliver intelligent automation.
              </p>
            </div>
            <div className="architecture-page__view-toggle">
              <Button
                kind={viewMode === 'carousel' ? 'primary' : 'tertiary'}
                size="sm"
                onClick={() => setViewMode('carousel')}
              >
                Carousel View
              </Button>
              <Button
                kind={viewMode === 'grid' ? 'primary' : 'tertiary'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                Grid View
              </Button>
            </div>
          </div>
        </Column>

        {viewMode === 'carousel' ? (
          <>
            <Column lg={16} md={8} sm={4}>
              <div className="architecture-carousel">
                <Tile className="architecture-carousel__card">
                  <div className="architecture-carousel__image-container">
                    <img
                      src={currentDiagram.image}
                      alt={currentDiagram.title}
                      className="architecture-carousel__image"
                      loading="lazy"
                    />
                  </div>
                  <div className="architecture-carousel__content">
                    <div className="architecture-carousel__header">
                      <h2 className="architecture-carousel__title">{currentDiagram.title}</h2>
                      <span className="architecture-carousel__date">{currentDiagram.date}</span>
                    </div>
                    <p className="architecture-carousel__description">{currentDiagram.description}</p>
                    <div className="architecture-carousel__tags">
                      {currentDiagram.tags.map((tag, index) => (
                        <Tag key={index} type="purple" size="sm">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Tile>

                <div className="architecture-carousel__controls">
                  <Button
                    kind="ghost"
                    size="lg"
                    renderIcon={ArrowLeft}
                    iconDescription="Previous diagram"
                    hasIconOnly
                    onClick={handlePrevious}
                    className="architecture-carousel__nav-button"
                  />
                  
                  <div className="architecture-carousel__indicator">
                    <span className="architecture-carousel__counter">
                      {currentIndex + 1} / {architectureDiagrams.length}
                    </span>
                  </div>

                  <Button
                    kind="ghost"
                    size="lg"
                    renderIcon={ArrowRight}
                    iconDescription="Next diagram"
                    hasIconOnly
                    onClick={handleNext}
                    className="architecture-carousel__nav-button"
                  />
                </div>
              </div>
            </Column>

            <Column lg={16} md={8} sm={4}>
              <ProgressIndicator
                currentIndex={currentIndex}
                className="architecture-carousel__progress"
                spaceEqually
              >
                {architectureDiagrams.map((diagram, index) => (
                  <ProgressStep
                    key={diagram.id}
                    label={diagram.title}
                    description={`Diagram ${index + 1}`}
                    onClick={() => handleStepClick(index)}
                  />
                ))}
              </ProgressIndicator>
            </Column>
          </>
        ) : (
          <Column lg={16} md={8} sm={4}>
            <div className="architecture-page__grid">
              {architectureDiagrams.map((diagram) => (
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
                      <h2 className="architecture-card__title">{diagram.title}</h2>
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
          </Column>
        )}
      </Grid>
    </div>
  );
};

export default ArchitecturePage;

// Made with Bob