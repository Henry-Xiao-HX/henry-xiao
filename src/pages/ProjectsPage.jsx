import React from 'react';
import { Grid, Column, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent, Tag, Button, Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Link } from 'react-router-dom';
import './ProjectsPage.scss';

const ProjectsPage = () => {
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
      status: 'In Production',
      year: '2024',
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
      status: 'Active',
      year: '2024',
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
      status: 'Prototype',
      year: '2024',
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
      status: 'Research',
      year: '2024',
    },
  ];

  const getStatusType = (status) => {
    const statusMap = {
      'In Production': 'green',
      'Active': 'blue',
      'Prototype': 'purple',
      'Research': 'cyan',
    };
    return statusMap[status] || 'gray';
  };

  return (
    <div className="projects-page">
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Breadcrumb noTrailingSlash className="projects-page__breadcrumb">
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>Projects</BreadcrumbItem>
          </Breadcrumb>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="projects-page__header">
            <h1 className="projects-page__title">Projects</h1>
            <p className="projects-page__subtitle">
              A collection of AI systems, data engineering tools, and enterprise solutions I've built.
              Each project demonstrates practical applications of modern AI and data technologies.
            </p>
          </div>
        </Column>

        <Column lg={16} md={8} sm={4}>
          <div className="projects-page__grid">
            {projects.map((project) => (
              <ExpandableTile
                key={project.id}
                id={project.id}
                className="project-card"
                tileCollapsedIconText="Expand to see details"
                tileExpandedIconText="Collapse details"
              >
                <TileAboveTheFoldContent>
                  <div className="project-card__header">
                    <div className="project-card__title-row">
                      <h2 className="project-card__title">{project.title}</h2>
                      <span className="project-card__year">{project.year}</span>
                    </div>
                    <Tag type={getStatusType(project.status)} size="sm" className="project-card__status">
                      {project.status}
                    </Tag>
                  </div>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tech-stack">
                    {project.techStack.map((tech, index) => (
                      <Tag key={index} type="purple" size="sm">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </TileAboveTheFoldContent>
                <TileBelowTheFoldContent>
                  <div className="project-card__details">
                    <h3 className="project-card__details-title">Key Features:</h3>
                    <ul className="project-card__details-list">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                    <div className="project-card__actions">
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
    </div>
  );
};

export default ProjectsPage;

// Made with Bob
