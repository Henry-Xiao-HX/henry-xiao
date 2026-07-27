/**
 * Centralized site data configuration
 * Update this file to change personal information, contact details, and content across the site
 */

const imageBase = `${import.meta.env.BASE_URL}images`;

export const personalInfo = {
  name: 'Henry Xiao',
  title: 'Agent Builder | Data and AI Customer Success Engineer @IBM FSM | Community Lead for IBM FSM CSE Agentic Center of Excellence',
  email: 'henryxiao2001@gmail.com',
  linkedin: 'henry-xiao-hx/',
  github: 'Henry-Xiao-HX',
  medium: '@henry-xiao-hx',
};

export const hero = {
  eyebrow: 'Data & AI',
  title: personalInfo.name,
  subtitle: personalInfo.title,
  specialties: [
    'Agentic AI for Enterprise Data Engineering',
    'Technical Enablement and Thought Leadership across IBM Teams',
    'Community Lead for IBM FSM CSE Agentic Center of Excellence',
  ],
  stats: [
    { value: '1', label: 'Community' },
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
  ],
  cta: {
    primary: { text: 'View Projects', target: 'projects' },
    secondary: { text: 'Read Publications', target: 'writing' },
  },
};

export const about = {
  image: {
    src: `${imageBase}/about/ibm-bee.jpg`,
    alt: 'Henry Xiao speaking at TechXchange',
  },
  intro: `I'm a Data & AI Customer Success Engineer at IBM, focusing on helping organizations adopt and accelerate Data & AI solutions: from modernizing data architectures to implementing Agentic AI capabilities that drive operational efficiency, strengthen risk management, and support regulatory compliance.`,
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
      skills: [
        'Confluent Kafka',
        'IBM DataStage',
        'IBM watsonx.data integration',
        'IBM watsonx.data intelligence'
      ],
    },
    {
      id: 'agentic-ai',
      title: 'Agentic AI',
      borderColor: 'cyan',
      items: [
        'Agent Design & Architecture',
        'Enterprise AI',
        'AI Governance',
        'Context Engineering',
      ],
      skills: [
        'LangChain',
        'Anthropic Claude',
        'OpenAI',
        'IBM watsonx',
        'IBM Bob',
      ],
    },
    {
      id: 'customer-success',
      title: 'Customer Success & Enablement',
      borderColor: 'magenta',
      items: [
        'Competitive Analysis',
        'Business Value Articulation',
        'Client Co-Creation',
      ],
      skills: [
        'Sales Enablement',
        'Value Proposition Development',
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
      title: 'Launch IBM Bob Community Hub',
      event: 'Launching IBM Bob Community Hub for Agentic Center of Excellence',
      location: 'Virtual',
      description: 'Led development and lauch of IBM Bob Community Hub, a central repository featuring integration patterns and reusable assets of IBM Bob with IBM products.',
      highlights: [
        'Established community platform for IBM',
        'Coordinated cross-team collaboration',
        '25+ demo assets. 10+ products. 40+ contributors',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
    {
      id: 'worldwide-dii-office-hour-2026',
      year: '2026',
      month: 'May',
      date: '5/14/2026',
      title: 'Present in Worldwide DII CSE Office Hour',
      event: 'IBM Worldwide DII CSE Office Hour',
      location: 'Virtual',
      description: 'Presented to 80+ Data Integration and Intelligence Customer Success Engineers in IBM across markets. I shared in this session my experience implementing the LLM Wiki pattern (popularized by Andrej Karpathy) with IBM Bob to streamline my daily executions as a CSE.',
      highlights: [
        'Global audience of CSE professionals',
        'Thought leadership in AI community',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
    {
      id: 'bay-area-ai-think-tank-2026',
      year: '2026',
      month: 'May',
      date: '5/7/2026',
      title: 'Present in Bay Area AI Think Tank',
      event: 'Bay Area AI Think Tank',
      location: 'San Francisco Bay Area',
      description: 'Presented at IBMs Bay Area AI Think Tank, that brought together 30+ developers, designers, and CSEs (both in-person and remote) to explore how AI agents can help us work smarter. I shared in this session my experience implementing the LLM Wiki pattern (popularized by Andrej Karpathy) with IBM Bob to streamline my daily executions as a CSE.',
      highlights: [
        'Thought leadership in AI community',
        'Enterprise AI adoption strategies',
      ],
      image: `${imageBase}/milestones/BayAreaAIThinkTank.png`,
    },
    {
      id: 'bob-party-fsm-2026',
      year: '2026',
      month: 'April',
      date: '4/10/2026',
      title: "Present in Bob in the Field, FSM Enablement",
      event: 'FSM CSE Event',
      location: 'Virtual',
      description: 'Presented on leveraging IBM Bob with watsonx.data intelligence/watsonx.data integration MCP servers for Agentic Data Engineering.',
      highlights: [
        'FSM-specific use cases',
        'IBM Bob Agentic Data Engineering',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
    {
      id: 'fsm-dii-office-hour-2026',
      year: '2026',
      month: 'March',
      date: '3/31/2026',
      title: 'Present in FSM DII CSE Office Hour',
      event: 'FSM DII CSE Office Hour',
      location: 'Virtual',
      description: 'Presented to Financial Services Market, Data Integration and Intelligence, CSE team: Using watsonx.data intelligence MCP with IBM Bob for effective context engineering and metadata governance.',
      highlights: [
        'Open MCP Ecosystem',
        'Context Engineering for Agents',
        'Metadata Governance',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
    {
      id: 'fsm-tech-sales-brief-2026',
      year: '2026',
      month: 'Q1',
      date: '3/31/2026',
      title: 'Featured on FSM Technical Sales Brief',
      event: 'FSM Technical Sales Program',
      location: 'IBM FSM',
      description: 'Featured on quarterly released FSM Technical Sales Brief for my contribution on Agentic Data Engineering, demonstrating agentic workflows for pipeline design, data quality management, and root cause analysis.',
      highlights: [
        'Agentic Data Engineering',
        'Technical Sales Enablement',
        'Customer Engagement Strategies',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
    {
      id: 'fsm-data-ai-sme-think-tank',
      year: '2026',
      month: 'June',
      date: '6/8/2026',
      title: 'Present in FSM Data & AI SME Think Tank',
      event: 'FSM Data & AI SME Think Tank',
      location: 'IBM FSM',
      description: 'The SME Think Tank brings other 150+ participants across CSEs, first-line/second-line managers, sales leads, and product SMEs. Launched the IBM Bob Community Hub and received volunteer requests from the community',
      highlights: [
        'Technical sales enablement',
        'Customer engagement strategies',
        'Cross-functional collaboration',
      ],
      image: `${imageBase}/milestones/Default.png`,
    },
  ],
};
export const architectureDiagrams = [
  {
    id: 'bob-datastage',
    title: 'Bob + DataStage: Automated ISX Export Analysis',
    description: 'Automated analysis of IBM DataStage ISX exports using Bob AI agent for intelligent job flow analysis, dependency mapping, and optimization recommendations.',
    image: `${imageBase}/architecture/architectre_bob_datastage_ISX_analysis.png`,
    tags: ['Bob', 'DataStage', 'ISX', 'Automation', 'Analysis'],
    date: '2026',
  },
  {
    id: 'bob-context-engineering',
    title: 'Bob + Context Engineering: Metadata-Driven Model Accuracy',
    description: 'Leveraging metadata management to enhance AI model accuracy through intelligent context engineering, improving data lineage understanding and governance.',
    image: `${imageBase}/architecture/architecture_bob_context_engineering.png`,
    tags: ['Bob', 'Context Engineering', 'Metadata', 'AI Accuracy', 'Governance'],
    date: '2026',
  },
  {
    id: 'bob-optim-tdm',
    title: 'Bob + Optim TDM: Production-Like Test Data',
    description: 'Enabling developers to test applications with production-like data using Bob AI agent integrated with IBM Optim Test Data Management for intelligent data provisioning.',
    image: `${imageBase}/architecture/architecture_bob_optim_tdm.png`,
    tags: ['Bob', 'Optim', 'TDM', 'Test Data', 'DevOps'],
    date: '2026',
  },
  {
    id: 'data-fabric-overview',
    title: 'Data Fabric Overview: Overarching Portfolio',
    description: 'Comprehensive data fabric architecture showcasing the complete portfolio of data integration, governance, and AI capabilities across the enterprise ecosystem.',
    image: `${imageBase}/architecture/architecture_data_fabric_overview.png`,
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
      'Agentic Center of Excellence for Data & AI',
      '25+ integration patterns across 10+ products',
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
    description: 'Specialized productivity for CSE team',
    techStack: ['IBM Bob', 'AI Agent'],
    details: [
      'Created custom mode/skill for IBM Bob',
      'Helped CSE keep track of technology, client information, contract details, and more',
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
    githubUrl: 'https://github.com/Henry-Xiao-HX/personal-chef-agent',
    demoUrl: 'https://github.com/Henry-Xiao-HX/personal-chef-agent',
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
    githubUrl: 'https://github.com/Henry-Xiao-HX/Bob-and-Carbon-Design-System',
    demoUrl: 'https://github.com/Henry-Xiao-HX/Bob-and-Carbon-Design-System',
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
    tags: ['Data Optimization', 'Agentic AI', 'Andrej Karpathy', 'IBM Bob'],
    url: 'https://levelup.gitconnected.com/data-pipeline-optimization-with-karpathy-autoresearch-and-ibm-bob-8cc9c9c3017d',
    status: 'Published',
  },
];


// Made with Bob

