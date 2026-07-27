import { useState } from 'react';
import {
  Grid,
  Column,
  Tile,
  Tag,
  Button,
  ProgressIndicator,
  ProgressStep,
} from '@carbon/react';
import { ArrowLeft, ArrowRight } from '@carbon/icons-react';
import { architectureDiagrams } from '../data/siteData';
import ArchitectureCard from '../components/Architecture/ArchitectureCard';
import PageLayout from '../components/PageLayout/PageLayout';
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

  const viewToggle = (
    <>
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
    </>
  );

  return (
    <PageLayout
      crumb="Architecture"
      title="Architecture Diagrams"
      subtitle="Visual representations of data integration, AI agent architectures, and enterprise solutions. Explore how Bob AI agents integrate with IBM data management tools to deliver intelligent automation."
      headerExtra={viewToggle}
    >
      <Grid>
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
                      {currentDiagram.tags.map((tag) => (
                        <Tag key={tag} type="purple" size="sm">
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
                <ArchitectureCard key={diagram.id} diagram={diagram} />
              ))}
            </div>
          </Column>
        )}
      </Grid>
    </PageLayout>
  );
};

export default ArchitecturePage;
