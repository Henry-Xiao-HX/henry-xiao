import React from 'react';
import { Grid, Column, Tag } from '@carbon/react';
import './Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      color: 'purple',
      skills: [
        'LangChain',
        'Anthropic Claude',
        'OpenAI',
        'IBM watsonx',
        'Agent Frameworks',
        'RAG',
        'Fine-tuning',
        'MCP Servers',
      ],
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      color: 'cyan',
      skills: [
        'Python',
        'SQL',
        'Apache Kafka',
        'IBM DataStage',
        'Data Governance',
        'Lineage Tracking',
        'Quality Management',
        'CDC & Replication',
      ],
    },
    {
      id: 'tools-platforms',
      title: 'Tools & Platforms',
      color: 'magenta',
      skills: [
        'React',
        'Node.js',
        'Docker',
        'Kubernetes',
        'Git',
        'IBM Cloud Pak for Data',
        'AWS',
        'Terraform',
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Skills</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="skills-container">
            {skillCategories.map((category) => (
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
