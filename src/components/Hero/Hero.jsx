import React from 'react';
import { Button, Grid, Column } from '@carbon/react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-section">
      <Grid className="hero-grid">
        <Column lg={16} md={8} sm={4}>
          <div className="hero-content">
            <h1 className="hero-title">Henry Xiao</h1>
            <p className="hero-subtitle">
              Agent Builder | Data and AI Customer Success Engineer @IBM FSM
            </p>
            <div className="hero-specialties">
              <p className="hero-specialty-label">Specializing in:</p>
              <ul className="hero-specialty-list">
                <li>Agentic AI for Enterprise Data Engineering</li>
                <li>Production-Grade AI Systems with Governance</li>
                <li>Data Integration & Intelligence at Scale</li>
              </ul>
            </div>
            <div className="hero-cta">
              <Button
                kind="primary"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                kind="secondary"
                size="lg"
                onClick={() => document.getElementById('writing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read Writing
              </Button>
              <Button
                kind="tertiary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
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
