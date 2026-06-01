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

export const milestones = {
  title: '2026 Highlights',
  description: 'Speaking engagements and key achievements',
  items: [
    {
      id: 'bob-community-hub-2026',
      year: '2026',
      month: 'May',
      date: '5/21/2026',
      title: 'IBM Bob Community Hub',
      event: 'Community Leadership',
      location: 'Virtual',
      description: 'Launched and led the IBM Bob Community Hub, fostering collaboration and knowledge sharing across IBM teams on agentic AI and automation.',
      highlights: [
        'Established community platform for Bob users',
        'Coordinated cross-team collaboration',
        'Knowledge sharing and best practices',
      ],
      image: '/images/milestones/bob-hub-2026.jpg',
    },
    {
      id: 'worldwide-dii-office-hour-2026',
      year: '2026',
      month: 'May',
      date: '5/14/2026',
      title: 'Present in Worldwide DII CSE Office Hour',
      event: 'IBM Worldwide DII CSE Office Hour',
      location: 'Virtual',
      description: 'Presented to worldwide Data Integration and Intelligence Customer Success Engineers on advanced techniques and best practices.',
      highlights: [
        'Global audience of CSE professionals',
        'Shared data integration strategies',
        'Q&A with international teams',
      ],
      image: '/images/milestones/worldwide-dii-2026.jpg',
    },
    {
      id: 'bay-area-ai-think-tank-2026',
      year: '2026',
      month: 'May',
      date: '5/7/2026',
      title: 'Present in Bay Area AI Think Tank',
      event: 'Bay Area AI Think Tank',
      location: 'San Francisco Bay Area',
      description: 'Participated in Bay Area AI Think Tank discussions on enterprise AI adoption and agentic systems architecture.',
      highlights: [
        'Thought leadership in AI community',
        'Enterprise AI adoption strategies',
        'Networking with AI innovators',
      ],
      image: '/images/milestones/bay-area-ai-2026.jpg',
    },
    {
      id: 'bob-party-fsm-2026',
      year: '2026',
      month: 'April',
      date: '4/10/2026',
      title: "Present in Let's Party with Bob, FSM CSE Entitlements",
      event: 'FSM CSE Event',
      location: 'Virtual',
      description: 'Presented on IBM Bob capabilities and CSE entitlements for Financial Services Market team, demonstrating practical applications.',
      highlights: [
        'Bob platform capabilities showcase',
        'FSM-specific use cases',
        'Interactive demonstrations',
      ],
      image: '/images/milestones/bob-party-2026.jpg',
    },
    {
      id: 'fsm-dii-office-hour-2026',
      year: '2026',
      month: 'March',
      date: '3/31/2026',
      title: 'Present in FSM DII CSE Office Hour',
      event: 'FSM DII CSE Office Hour',
      location: 'Virtual',
      description: 'Presented to Financial Services Market Data Integration and Intelligence CSE team on customer success strategies and technical solutions.',
      highlights: [
        'FSM-focused data integration insights',
        'Customer success best practices',
        'Technical deep-dive sessions',
      ],
      image: '/images/milestones/fsm-dii-2026.jpg',
    },
    {
      id: 'fsm-tech-sales-brief-2026',
      year: '2026',
      month: 'Q1',
      date: 'Q1 2026',
      title: 'Accepted to FSM Technical Sales Brief',
      event: 'FSM Technical Sales Program',
      location: 'IBM FSM',
      description: 'Selected for FSM Technical Sales Brief program, contributing technical expertise to sales enablement and customer engagement strategies.',
      highlights: [
        'Technical sales enablement',
        'Customer engagement strategies',
        'Cross-functional collaboration',
      ],
      image: '/images/milestones/tech-sales-2026.jpg',
    },
  ],
};

// Made with Bob
