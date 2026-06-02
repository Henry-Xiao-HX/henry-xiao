/**
 * Centralized site data configuration
 * Update this file to change personal information, contact details, and content across the site
 */

export const personalInfo = {
  name: 'Henry Xiao',
  title: 'Agent Builder | Data and AI Customer Success Engineer @IBM FSM | Community Leader for IBM FSM CSE Community Hub',
  email: 'henryxiao2001@gmail.com',
  linkedin: 'henry-xiao-hx/',
  github: 'Henry-Xiao-HX',
  medium: '@henry-xiao-hx',
};

export const hero = {
  title: personalInfo.name,
  subtitle: personalInfo.title,
  specialties: [
    'Agentic AI for Enterprise Data Engineering',
    'Technical Enablement and Thought Leadership across IBM Teams',
    'Community Leader for IBM FSM CSE Community Hub',
  ],
  cta: {
    primary: { text: 'View Projects', target: 'projects' },
    secondary: { text: 'Read Publications', target: 'writing' },
    tertiary: { text: 'Contact Me', target: 'contact' },
  },
};

export const about = {
  intro: `I'm a Data & AI Customer Success Engineer at IBM, focusing on helping organizations adopt and accelerate Data & AI solutions: from modernizing data architectures to implementing Agentic AI capabilities that drive operational efficiency, strengthen risk management, and support regulatory compliance.

`,
  approach: `My approach: modular, open architecture that bridges agentic innovation with engineering rigor.`,
  focusAreas: [
    {
      title: 'Agentic AI',
      description: 'Demystifying agentic AI for data engineers by bridging innovation with engineering rigor through modular, open architectures that preserve determinism, reproducibility, and control',
    },
    {
      title: 'Data Integration',
      description: 'Championing agentic data engineering as an execution model using MCP server and AI orchestration across Batch ETL, real-time data streaming, Change Data Capture, and other integration modes.',
    },
    {
      title: 'Data Intelligence',
      description: 'Enabling natural language catalog discovery, metadata analysis, and lineage exploration through agent-orchestrated workflows that accelerate root cause analysis and data quality management.',
    },
    {
      title: 'Enterprise Governance',
      description: 'Positioning governed, explainable agentic workflows through human-in-the-loop approvals, guardrails, and standardized configurations that maintain engineering-friendly transparency',
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
        'Data Governance (Data Lineage, Metadata Management, Data Quality Management)',
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
        'Context Engineering',
      ],
    },
    {
      id: 'financial-services',
      title: 'Customer Success',
      borderColor: 'magenta',
      items: [
        'Competitive Analysis',
        'Business Value Articulation',
        'Client Co-Creation',
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
export const architectureDiagrams = [
  {
    id: 'bob-datastage',
    title: 'Bob + DataStage: Automated ISX Export Analysis',
    description: 'Automated analysis of IBM DataStage ISX exports using Bob AI agent for intelligent job flow analysis, dependency mapping, and optimization recommendations.',
    image: '/images/architecture/architectre_bob_datastage_ISX_analysis.png',
    tags: ['Bob', 'DataStage', 'ISX', 'Automation', 'Analysis'],
    date: '2026',
  },
  {
    id: 'bob-context-engineering',
    title: 'Bob + Context Engineering: Metadata-Driven Model Accuracy',
    description: 'Leveraging metadata management to enhance AI model accuracy through intelligent context engineering, improving data lineage understanding and governance.',
    image: '/images/architecture/architecture_bob_context_engineering.png',
    tags: ['Bob', 'Context Engineering', 'Metadata', 'AI Accuracy', 'Governance'],
    date: '2026',
  },
  {
    id: 'bob-optim-tdm',
    title: 'Bob + Optim TDM: Production-Like Test Data',
    description: 'Enabling developers to test applications with production-like data using Bob AI agent integrated with IBM Optim Test Data Management for intelligent data provisioning.',
    image: '/images/architecture/architecture_bob_optim_tdm.png',
    tags: ['Bob', 'Optim', 'TDM', 'Test Data', 'DevOps'],
    date: '2026',
  },
  {
    id: 'data-fabric-overview',
    title: 'Data Fabric Overview: Overarching Portfolio',
    description: 'Comprehensive data fabric architecture showcasing the complete portfolio of data integration, governance, and AI capabilities across the enterprise ecosystem.',
    image: '/images/architecture/architecture_data_fabric_overview.png',
    tags: ['Data Fabric', 'Portfolio', 'Integration', 'Enterprise', 'Architecture'],
    date: '2026',
  },
];

export const projectStatusConfig = {
  'In Production': { color: 'green' },
  'Active': { color: 'blue' },
  'Demo': { color: 'teal' },
};

export const projects = [
  {
    id: 'fsm-dii-cse-bob',
    title: 'FSM CSE IBM BOB Community Hub',
    description: 'Enterprise AI enablement platform for FSM Data & AI Customer Success Engineers',
    techStack: ['Python', 'MCPs', 'IBM Bob', 'React',],
    details: [
      'Built modular AI agent framework for enterprise data engineering tasks',
      'Implemented MCP server architecture for tool extensibility',
      'Integrated with IBM Bob for production-grade AI capabilities',
      'Designed governance and compliance features for financial services',
    ],
    githubUrl: '#',
    demoUrl: '#',
    status: 'In Production',
    isIBMInternal: true,
    year: '2026',
  },
  {
    id: 'custom-bob-mode',
    title: 'CSE LLM Wiki',
    description: 'Specialized productivity tool for CSE team workflows',
    techStack: ['IBM Bob', 'AI Agent'],
    details: [
      'Created custom mode for IBM Bob AI Agent',
      'Streamlined common CSE workflows and documentation tasks',
      'Integrated with team knowledge base and resources',
      'Improved team productivity through context-aware assistance',
    ],
    githubUrl: 'https://github.com/Henry-Xiao-HX/CSE-LLM-WIKI',
    demoUrl: 'https://github.com/Henry-Xiao-HX/CSE-LLM-WIKI',
    status: 'Active',
    isIBMInternal: false,
    year: '2026',
  },
  {
    id: 'personal-chef-agent',
    title: 'Personal Chef Agent',
    description: 'Demo Minimum Configuration for AI agent',
    techStack: ['Python', 'LangChain'],
    details: [
      'Implemented conversation memory and context management',
      'Demonstrated practical application of agentic AI patterns',
    ],
    githubUrl: '#',
    demoUrl: '#',
    status: 'Demo',
    isIBMInternal: false,
    year: '2026',
  },
  {
    id: 'carbon-banking-application',
    title: 'Banking Application with Carbon Design',
    description: 'Demo minimum configuration for banking application built with Carbon Design',
    techStack: ['Python', 'Carbon MCP'],
    details: [
      'Showcasing the IBM Carbon Design System and IBM Think styling in a modern banking application interface.',
      'This project is not affiliated with IBM',
    ],
    githubUrl: '#',
    demoUrl: '#',
    status: 'Demo',
    isIBMInternal: false,
    year: '2026',
  },
];

export const articles = [
  {
    id: 'metadata-context-engineering',
    title: 'Metadata-Driven Context Engineering',
    date: 'March 6, 2026',
    readTime: '8 min',
    excerpt: 'Explore how context engineering, enabled with governed metadata, allow enterprise agents to reason effectively without suffering from context pollution or information overload.',
    fullDescription: 'Exploring how context engineering, combined with governed metadata, enables enterprise agents to reason effectively without suffering from context pollution or information overload.',
    tags: ['AI', 'Data Engineering', 'Metadata', 'Context Management'],
    url: 'https://medium.com/@henry-xiao-hx/metadata-driven-context-engineering-for-ai-agents-a67446ff4ba1',
    status: 'Published',
  },
  {
    id: 'llm-wiki-pattern',
    title: 'Applying Karpathy’s LLM Wiki Pattern: Building a Compounding Knowledge Base for Tech Sellers with IBM Bob',
    date: 'April 27, 2026',
    readTime: '6 min',
    excerpt: 'Knowledge management patterns for Customer Success Engineers: Structuring information for optimal retrieval and reasoning.',
    fullDescription: 'Introducing the LLM Wiki Pattern for CSEs: Learn how to apply Karpathy LLM wiki to manage personal knowledge as a CSE.',
    tags: ['Knowledge Management', 'RAG', 'Information Architecture', 'AI Systems'],
    url: 'https://levelup.gitconnected.com/applying-karpathys-llm-wiki-pattern-building-a-compounding-knowledge-base-for-tech-sellers-with-fef594872168',
    status: 'Published',
  },
    {
    id: 'bob-data-pipeline-optimization',
    title: 'Data Pipeline Optimization with Karpathy Autoresearch and IBM Bob',
    date: 'April 8, 2026',
    readTime: '6 min',
    excerpt: 'The project explores how an autonomous agent (IBM Bob) can optimize data pipelines by navigating the trade-offs between speed, cloud cost, and resource utilization.',
    fullDescription: 'This article documents a technical experiment applying Andrej Karpathy’s Autoresearch methodology, originally designed for ML model optimization, to data engineering pipeline. The project explores how an autonomous agent (IBM Bob) can optimize data pipelines by navigating the trade-offs between speed, cloud cost, and resource utilization.',
    tags: ['Data Optimization', 'Agentic AI', 'Andrej Karpathy', 'IBM Bob'],
    url: 'https://levelup.gitconnected.com/data-pipeline-optimization-with-karpathy-autoresearch-and-ibm-bob-8cc9c9c3017d',
    status: 'Published',
  },
];


// Made with Bob
