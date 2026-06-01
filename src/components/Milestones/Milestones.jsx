import React, { useState } from 'react';
import { Grid, Column, Layer } from '@carbon/react';
import { CheckmarkFilled } from '@carbon/icons-react';
import { milestones } from '../../data/siteData';
import './Milestones.scss';

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleNodeClick = (milestone) => {
    setSelectedMilestone(selectedMilestone?.id === milestone.id ? null : milestone);
  };

  // Sort milestones chronologically (oldest to newest)
  const sortedMilestones = [...milestones.items].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  // Calculate dynamic positioning based on number of milestones
  const calculatePosition = (index, total) => {
    if (total === 1) return 50;
    const spacing = 80 / (total - 1); // 80% of width divided by gaps
    return 10 + (index * spacing); // Start at 10%, end at 90%
  };

  // Color scheme that cycles through 5 colors
  const getColorIndex = (index) => index % 5;

  return (
    <section className="milestones-section portfolio-section" id="milestones">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <div className="milestones-header">
            <h2 className="milestones-title">{milestones.title}</h2>
            <p className="milestones-description">{milestones.description}</p>
          </div>
        </Column>
      </Grid>

      <Grid className="milestones-timeline-container">
        <Column lg={16} md={8} sm={4}>
          {/* Timeline */}
          <div className="timeline-wrapper">
            <div className="timeline-arrow" />
            <div className="timeline-nodes">
              {sortedMilestones.map((milestone, index) => {
                const isActive = selectedMilestone?.id === milestone.id;
                const position = calculatePosition(index, sortedMilestones.length);
                const colorIndex = getColorIndex(index);
                
                return (
                  <button
                    key={milestone.id}
                    className={`timeline-node ${index % 2 === 0 ? 'above' : 'below'} ${isActive ? 'active' : ''}`}
                    onClick={() => handleNodeClick(milestone)}
                    aria-label={`${milestone.title} - ${milestone.date}`}
                    aria-expanded={isActive}
                    style={{
                      left: `${position}%`,
                      '--node-color-index': colorIndex
                    }}
                  >
                    <div className="node-content">
                      <div className="node-title">{milestone.title}</div>
                      <div className="node-date-info">
                        <span className="node-date">{milestone.month} {milestone.year}</span>
                      </div>
                    </div>
                    <div className="node-connector" />
                    <div className="node-circle">
                      <CheckmarkFilled size={16} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Milestone Details */}
          {selectedMilestone && (
            <div className="milestone-details-container">
              <Layer className="milestone-details-card">
                <Grid className="milestone-content-grid" narrow>
                  <Column lg={6} md={3} sm={4} className="milestone-image-col">
                    <div className="milestone-image-placeholder">
                      <p className="milestone-date">{selectedMilestone.date}</p>
                      <p className="milestone-event">{selectedMilestone.event}</p>
                      <p className="milestone-location">{selectedMilestone.location}</p>
                    </div>
                  </Column>
                  <Column lg={10} md={5} sm={4} className="milestone-details-col">
                    <div className="milestone-details-content">
                      <h3 className="milestone-event-title">{selectedMilestone.event}</h3>
                      <p className="milestone-description">{selectedMilestone.description}</p>
                      <div className="milestone-highlights">
                        <h4 className="milestone-highlights-title">Key Highlights</h4>
                        <ul className="milestone-highlights-list">
                          {selectedMilestone.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Column>
                </Grid>
              </Layer>
            </div>
          )}
        </Column>
      </Grid>
    </section>
  );
};

export default Milestones;

// Made with Bob