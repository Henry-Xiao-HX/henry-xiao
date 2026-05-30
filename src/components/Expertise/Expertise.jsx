import React from 'react';
import { Grid, Column, ClickableTile } from '@carbon/react';
import { expertise } from '../../data/siteData';
import './Expertise.scss';

const Expertise = () => {

  return (
    <section id="expertise" className="expertise-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Expertise</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="expertise-grid">
            {expertise.areas.map((area) => (
              <ClickableTile
                key={area.id}
                id={area.id}
                className={`expertise-tile expertise-tile--${area.borderColor}`}
              >
                <h3 className="expertise-tile__title">{area.title}</h3>
                <ul className="expertise-tile__list">
                  {area.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </ClickableTile>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Expertise;

// Made with Bob
