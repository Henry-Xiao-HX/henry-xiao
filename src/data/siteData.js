/**
 * Centralized site data configuration
 * Update this file to change personal information, contact details, and content across the site
 */

export const personalInfo = {
  name: 'Henry Xiao',
  title: 'Agent Builder | Data and AI Customer Success Engineer @IBM FSM | Community Leader for IBM FSM CSE Community Hub',
  email: 'your-email@example.com',
  linkedin: 'henry-xiao',
  github: 'henry-xiao',
  medium: '@henry-xiao',
};

export const hero = {
  title: personalInfo.name,
  subtitle: personalInfo.title,
  specialties: [
    'Agentic AI for Enterprise Data Engineering',
    'Production-Grade AI Systems with Governance',
    'Community leader for IBM FSM CSE Community Hub',
  ],
  cta: {
    primary: { text: 'View Projects', target: 'projects' },
    secondary: { text: 'Read Writing', target: 'writing' },
    tertiary: { text: 'Contact Me', target: 'contact' },
  },
};

export const about = {
  intro: `I'm a Data & AI Customer Success Engineer at IBM, specializing in agentic data engineering—bridging AI innovation with engineering rigor for financial services clients.`,
  approach: `My approach: Modular, open architecture using Python SDK + MCP servers, positioning agentic data engineering as an execution model rather than product dependency.`,
  focusAreas: [
    {
      title: 'Data Integration Architecture',
      description: 'Batch ETL, streaming, CDC, replication',
    },
    {
      title: 'Agentic AI Implementation',
      description: 'IBM Bob, watsonx.orchestrate, MCP servers',
    },
    {
      title: 'Enterprise Governance',
      description: 'Lineage, policy enforcement, compliance',
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Multi-cloud and on-premises architectures',
    },
  ],
};

export const contact = {
  title: 'Get in Touch',
  description: `I'm always interested in discussing data engineering, AI agents, and enterprise architecture. Feel free to reach out!`,
  links: [
    {
      id: 'email',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: 'Email',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: `linkedin.com/in/${personalInfo.linkedin}`,
      href: `https://linkedin.com/in/${personalInfo.linkedin}`,
      icon: 'LogoLinkedin',
    },
    {
      id: 'github',
      label: 'GitHub',
      value: `github.com/${personalInfo.github}`,
      href: `https://github.com/${personalInfo.github}`,
      icon: 'LogoGithub',
    },
    {
      id: 'medium',
      label: 'Medium',
      value: `medium.com/${personalInfo.medium}`,
      href: `https://medium.com/${personalInfo.medium}`,
      icon: 'Edit',
    },
  ],
};

export const skills = {
  categories: [
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
  ],
};

export const expertise = {
  areas: [
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
  ],
};

// Made with Bob
