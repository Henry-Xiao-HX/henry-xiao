import React from 'react';
import { Grid, Column } from '@carbon/react';
import { about } from '../../data/siteData';
import './About.scss';

const About = () => {
  return (
    <section id="about" className="about-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">About Me</h2>
        </Column>
        <Column lg={4} md={2} sm={4} className="about-image-col">
          <div className="about-image-placeholder">
            <div className="placeholder-content">
              <p>Professional Photo</p>
              <p className="placeholder-note">(To be added)</p>
            </div>
          </div>
        </Column>
        <Column lg={12} md={6} sm={4}>
          <div className="about-content">
            <p className="about-intro">
              {about.intro}
            </p>
            <p className="about-approach">
              {about.approach}
            </p>
            <div className="about-focus">
              <h3 className="focus-title">Key Focus Areas:</h3>
              <ul className="focus-list">
                {about.focusAreas.map((area, index) => (
                  <li key={index}>
                    <strong>{area.title}</strong>
                    <span>{area.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default About;

// Made with Bob
