import React from 'react';
import { Button, Grid, Column } from '@carbon/react';
import { hero } from '../../data/siteData';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-section">
      <Grid className="hero-grid">
        <Column lg={16} md={8} sm={4}>
          <div className="hero-content">
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">
              {hero.subtitle}
            </p>
            <div className="hero-specialties">
              <p className="hero-specialty-label">Specializing in:</p>
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
                onClick={() => document.getElementById(hero.cta.primary.target)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.primary.text}
              </Button>
              <Button
                kind="secondary"
                size="lg"
                onClick={() => document.getElementById(hero.cta.secondary.target)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.secondary.text}
              </Button>
              <Button
                kind="tertiary"
                size="lg"
                onClick={() => document.getElementById(hero.cta.tertiary.target)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {hero.cta.tertiary.text}
              </Button>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Hero;

// Made with Bob
