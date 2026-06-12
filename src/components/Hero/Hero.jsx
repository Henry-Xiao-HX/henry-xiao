import React from 'react';
import { Button, Grid, Column } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { hero } from '../../data/siteData';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-section">
      <Grid className="hero-grid">
        <Column lg={10} md={6} sm={4} className="hero-content-col">
          <div className="hero-content">
            <p className="hero-eyebrow">Data & AI</p>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">
              {hero.subtitle}
            </p>
            <div className="hero-specialties">
              <h2 className="hero-specialty-label">Core expertise</h2>
              <ul className="hero-specialty-list">
                {hero.specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>
            <div className="hero-cta">
              <Button
                kind="primary"
                size="lg"
                renderIcon={ArrowRight}
                onClick={() => document.getElementById(hero.cta.primary.target)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.primary.text}
              </Button>
              <Button
                kind="ghost"
                size="lg"
                onClick={() => document.getElementById(hero.cta.secondary.target)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.secondary.text}
              </Button>
            </div>
          </div>
        </Column>
        <Column lg={6} md={2} sm={4} className="hero-visual-col">
          <div className="hero-visual">
            <div className="hero-stat-card">
              <p className="hero-stat-value">1</p>
              <p className="hero-stat-label">Community</p>
            </div>
            <div className="hero-stat-card">
              <p className="hero-stat-value">3+</p>
              <p className="hero-stat-label">Years Experience</p>
            </div>
            <div className="hero-stat-card">
              <p className="hero-stat-value">20+</p>
              <p className="hero-stat-label">Projects Delivered</p>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Hero;

// Made with Bob
