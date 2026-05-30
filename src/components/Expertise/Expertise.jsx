import React from 'react';
import { Grid, Column, ClickableTile } from '@carbon/react';
import './Expertise.scss';

const Expertise = () => {
  const expertiseAreas = [
    {
      id: 'data-integration',
      title: 'Data Integration & Intelligence',
      borderColor: 'purple',
      items: [
        'Batch ETL & Real-time Streaming',
        'Change Data Capture (CDC)',
        'Data Replication & Synchronization',
        'Data Governance & Lineage',
        'Quality Management & Observability',
      ],
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI Solutions',
      borderColor: 'cyan',
      items: [
        'Agent Design & Architecture',
        'Enterprise AI Implementation',
        'Production Systems with Governance',
        'Reasoning Frameworks',
        'Context Engineering',
      ],
    },
    {
      id: 'enterprise-arch',
      title: 'Enterprise Architecture',
      borderColor: 'magenta',
      items: [
        'Scale & Performance Optimization',
        'Governance & Compliance',
        'Security & Access Control',
        'Hybrid Cloud Architecture',
        'DevOps & AI SDLC',
      ],
    },
  ];

  return (
    <section id="expertise" className="expertise-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Expertise</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="expertise-grid">
            {expertiseAreas.map((area) => (
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
