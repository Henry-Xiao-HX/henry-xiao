import React from 'react';
import { Grid, Column, Tag } from '@carbon/react';
import { skills } from '../../data/siteData';
import './Skills.scss';

const Skills = () => {

  return (
    <section id="skills" className="skills-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Skills</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="skills-container">
            {skills.categories.map((category) => (
              <div key={category.id} className="skills-category">
                <h3 className="skills-category__title">{category.title}</h3>
                <div className="skills-category__tags">
                  {category.skills.map((skill, index) => (
                    <Tag
                      key={index}
                      type={category.color}
                      size="md"
                      className="skill-tag"
                    >
                      {skill}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Skills;

// Made with Bob
