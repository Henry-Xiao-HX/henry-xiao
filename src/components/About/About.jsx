import React from 'react';
import { Grid, Column } from '@carbon/react';
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
              I'm a Data & AI Customer Success Engineer at IBM, specializing in 
              agentic data engineering—bridging AI innovation with engineering rigor 
              for financial services clients.
            </p>
            <p className="about-approach">
              My approach: Modular, open architecture using Python SDK + MCP servers, 
              positioning agentic data engineering as an execution model rather than 
              product dependency.
            </p>
            <div className="about-focus">
              <h3 className="focus-title">Key Focus Areas:</h3>
              <ul className="focus-list">
                <li>
                  <strong>Data Integration Architecture</strong>
                  <span>Batch ETL, streaming, CDC, replication</span>
                </li>
                <li>
                  <strong>Agentic AI Implementation</strong>
                  <span>IBM Bob, watsonx.orchestrate, MCP servers</span>
                </li>
                <li>
                  <strong>Enterprise Governance</strong>
                  <span>Lineage, policy enforcement, compliance</span>
                </li>
                <li>
                  <strong>Hybrid Cloud Solutions</strong>
                  <span>Multi-cloud and on-premises architectures</span>
                </li>
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
