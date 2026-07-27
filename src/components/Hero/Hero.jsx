import { Button, Grid, Column } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import { hero } from '../../data/siteData';
import { scrollToSection } from '../../utils/scrollToSection';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-section">
      <Grid className="hero-grid">
        <Column lg={10} md={6} sm={4} className="hero-content-col">
          <div className="hero-content">
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-subtitle">{hero.subtitle}</p>
            <div className="hero-specialties">
              <h2 className="hero-specialty-label">Core expertise</h2>
              <ul className="hero-specialty-list">
                {hero.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
              </ul>
            </div>
            <div className="hero-cta">
              <Button
                kind="primary"
                size="lg"
                renderIcon={ArrowRight}
                onClick={() => scrollToSection(hero.cta.primary.target)}
              >
                {hero.cta.primary.text}
              </Button>
              <Button
                kind="ghost"
                size="lg"
                onClick={() => scrollToSection(hero.cta.secondary.target)}
              >
                {hero.cta.secondary.text}
              </Button>
            </div>
          </div>
        </Column>
        <Column lg={6} md={2} sm={4} className="hero-visual-col">
          <div className="hero-visual">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <p className="hero-stat-value">{stat.value}</p>
                <p className="hero-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Hero;

// Made with Bob
