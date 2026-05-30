import React from 'react';
import { Grid, Column, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag, Button } from '@carbon/react';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 'fsm-dii-cse-bob',
      title: 'FSM-DII-CSE-BOB-ASSET',
      description: 'Enterprise AI enablement platform for FSM Data & AI Customer Success Engineers',
      techStack: ['Python', 'LangChain', 'MCP', 'watsonx', 'IBM Cloud'],
      details: [
        'Built modular AI agent framework for enterprise data engineering tasks',
        'Implemented MCP server architecture for tool extensibility',
        'Integrated with IBM watsonx for production-grade AI capabilities',
        'Designed governance and compliance features for financial services',
      ],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'custom-bob-mode',
      title: 'Custom Bob Mode',
      description: 'Specialized productivity tool for CSE team workflows',
      techStack: ['TypeScript', 'React', 'Carbon Design', 'VS Code API'],
      details: [
        'Created custom mode for IBM Bob AI assistant',
        'Streamlined common CSE workflows and documentation tasks',
        'Integrated with team knowledge base and resources',
        'Improved team productivity through context-aware assistance',
      ],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'personal-chef-agent',
      title: 'Personal Chef Agent',
      description: 'AI agent with conversation memory for personalized cooking assistance',
      techStack: ['Python', 'Anthropic Claude', 'LangChain', 'Vector DB'],
      details: [
        'Implemented conversation memory and context management',
        'Built personalized recipe recommendation system',
        'Designed natural language interface for cooking queries',
        'Demonstrated practical application of agentic AI patterns',
      ],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'metadata-context-engineering',
      title: 'Metadata-Driven Context Engineering',
      description: 'Data engineering agent with intelligent context management',
      techStack: ['Python', 'Apache Kafka', 'DataStage', 'RAG'],
      details: [
        'Developed metadata-driven approach to context engineering',
        'Implemented intelligent data lineage tracking',
        'Built automated data quality monitoring system',
        'Demonstrated scalable architecture for enterprise data workflows',
      ],
      githubUrl: '#',
      demoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section portfolio-section">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <h2 className="section-title">Projects</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <div className="projects-grid">
            {projects.map((project) => (
              <ExpandableTile
                key={project.id}
                id={project.id}
                className="project-tile"
                tileCollapsedIconText="Expand to see details"
                tileExpandedIconText="Collapse details"
              >
                <TileAboveTheFoldContent>
                  <h3 className="project-tile__title">{project.title}</h3>
                  <p className="project-tile__description">{project.description}</p>
                  <div className="project-tile__tech-stack">
                    {project.techStack.map((tech, index) => (
                      <Tag key={index} type="purple" size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  <div className="project-tile__details">
                    <h4 className="project-tile__details-title">Key Features:</h4>
                    <ul className="project-tile__details-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-tile__actions">
                      <Button kind="primary" size="sm" href={project.githubUrl}>
                        View on GitHub
                      </Button>
                      <Button kind="secondary" size="sm" href={project.demoUrl}>
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </TileBelowTheFoldContent>
              </ExpandableTile>
            ))}
          </div>
        </Column>
      </Grid>
    </section>
  );
};

export default Projects;

// Made with Bob
