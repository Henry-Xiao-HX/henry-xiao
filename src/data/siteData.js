/**
 * Centralized site data configuration
 * Update this file to change personal information, contact details, and content across the site
 */

const imageBase = `${import.meta.env.BASE_URL}images`;

export const personalInfo = {
  name: 'Henry Xiao',
  title: 'Agent Builder | Data and AI Customer Success Engineer @IBM FSM | Tech Lead for IBM FSM CSE Agentic Center of Excellence',
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
    'Tech Lead for IBM FSM CSE Agentic Center of Excellence',
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
  intro: `I am an AI Engineer specializing in Agentic AI, enterprise data modernization, and responsible AI adoption. Founded and scaled IBM's Financial Services Market Agentic Center of Excellence, driving reusable agentic solutions across 15+ products and enabling adoption among 300+ practitioner. Proven track record of translating emerging AI capabilities into scalable solutions that deliver measurable business impact.`,
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
    description: 'Founded and scaled the IBM FSM CSE Agentic Center of Excellence - coordinating 10+ contributors to build 25+ reusable agentic AI patterns across 15+ IBM products, reaching 300+ technical sellers, engineers, and executives across the IBM Financial Services Market community. The hub site itself was built with IBM Bob using the Carbon Design System MCP server to enforce IBM design token compliance throughout.',
    techStack: ['Carbon Design System', 'IBM Bob','Agent Development'],
    details: [
      'Founded and scaled the IBM FSM CSE Agentic Center of Excellence from idea to organization-wide initiative',
      'Coordinated 10+ contributors to build 25+ reusable agentic AI patterns across 15+ IBM products',
      'Accelerated AI enablement across the IBM Financial Services Market, reaching 300+ technical sellers, engineers, and executives',
      'Built with IBM Bob as the primary AI-assisted development environment - from component scaffolding to routing and accessibility',
      'Leveraged Carbon Design System MCP server to enforce correct component APIs, IBM Plex typography, color tokens, and spacing at generation time - ensuring the site adhere to IBM standards',
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
    description: 'A template for building a persistent, interlinked knowledge base to track client opportunities, contacts, contracts, and technical engagements - following the LLM Wiki pattern where raw sources stay immutable, wiki pages are LLM-generated interlinked markdown, and every interaction enriches the graph.',
    techStack: ['IBM Bob', 'Markdown', 'LLM Wiki Pattern', 'AI Agent'],
    details: [
      'Implements the LLM Wiki pattern: raw sources (meeting notes, contracts, daily logs) remain immutable while LLM-generated wiki pages form a compounding, interlinked knowledge base',
      'Cross-references between clients, contacts, contracts, and technical engagements create a semantic graph of relationships that grows richer with every ingest, query, and lint pass',
      'Built as a reusable template for Customer Success Engineers to track technology context, client information, and contract details',
      'Every interaction (ingest, query, lint) enriches the knowledge base, compounding value over time rather than starting from scratch each session',
    ],
    githubUrl: 'https://github.com/Henry-Xiao-HX/CSE-LLM-WIKI',
    demoUrl: 'https://github.com/Henry-Xiao-HX/CSE-LLM-WIKI',
    status: 'In Production',
    isIBMInternal: false,
    year: '2026',
  },
  {
    id: 'personal-chef-agent',
    title: 'Personal Chef Agent',
    description: 'A weekend personal project exploring simplicity - a ReAct-style AI agent that reads fridge contents, remembers food preferences, suggests dinner recipes, and compounds knowledge across sessions. Runs entirely on a laptop with Ollama for local inference and plain markdown files for state. Not reliable or scalable, but certainly fun.',
    techStack: ['Python', 'LangChain', 'Ollama', 'llama3.2', 'ReAct Agent', 'Markdown', 'FileManagementToolkit'],
    details: [
      'ReAct-style agent loop: automatically injects current fridge inventory and food preferences as context before every query - the LLM always has full context without the user repeating themselves',
      'Smart session tracking on exit: reads the full conversation, asks the LLM to extract any newly mentioned preferences, diffs against existing state, and only writes updates when there is genuinely new information - timestamped',
      'Inference pipeline: Ollama local model (llama3.2 for speed), LangChain FileManagementToolkit for all markdown reads/writes, zero cloud API calls or external infrastructure',
      'Two modes: interactive chat for exploring recipe ideas, and single-shot for one-question/one-answer scripting or quick queries',
      'Markdown-based state by design: human-readable, manually editable with any text editor, git-friendly (track your fridge history!), and no database setup required',
    ],
    githubUrl: 'https://github.com/Henry-Xiao-HX/personal-chef-agent',
    demoUrl: 'https://github.com/Henry-Xiao-HX/personal-chef-agent',
    status: 'Demo',
    isIBMInternal: false,
    year: '2026',
  },
  {
    id: 'auto-infra-pipeline-optimization',
    title: 'Data Pipeline Optimization with AI Agent',
    description: 'An autonomous AI agent that optimizes data pipelines by experimenting with configurations to find the optimal balance between speed, cost, and resource efficiency - an adaptation of Andrej Karpathy\'s Auto-Research methodology applied to data engineering.',
    techStack: ['Python', 'LangChain', 'IBM Bob', 'Agentic AI', 'Data Pipelines'],
    details: [
      'Adapts Karpathy\'s Auto-Research loop to pipeline optimization: instead of minimizing validation loss, the agent autonomously "trains" pipeline configuration to maximize an efficiency score across latency, cost, and resource health',
      'Core loop: Initialize with baseline config → Mutate pipeline levers (partitioning, compression, query optimization) → Benchmark for a fixed 5-minute window → Evaluate efficiency score → Keep improvements, discard regressions, repeat indefinitely',
      'Efficiency score is a composite function of latency, cloud cost, and resource health - giving the agent a single objective to optimize across multiple competing trade-offs',
      'Fully autonomous: no human intervention required between iterations; the agent explores the configuration space and converges on an optimal setup over time',
    ],
    githubUrl: 'https://github.com/Henry-Xiao-HX/auto-data-pipeline-optimization',
    demoUrl: 'https://github.com/Henry-Xiao-HX/auto-data-pipeline-optimization',
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
    status: 'Active',
    isIBMInternal: false,
    year: '2026',
  },
  {
    id: 'ibm-bob-and-optim',
    title: 'IBM Bob + Optim Archive API Toolkit',
    description: 'A toolkit for working with the IBM Optim Archive API - featuring automated token authentication with caching, interactive demo scripts, a real-time BI dashboard for monitoring archival operations, and synthetic test data generation for DevOps CI/CD pipelines.',
    techStack: ['Python', 'IBM Optim', 'REST API', 'BI Dashboard', 'Test Data Management', 'IBM Bob'],
    details: [
      'Automated authentication with token caching - eliminates repeated credential handling across scripts',
      'Interactive demo scripts explore API capabilities step-by-step, designed for onboarding and enablement of new users to the Optim Archive API',
      'Real-time BI dashboard for monitoring and analytics of archival operations - visualizes throughput, errors, and operational status at a glance',
      'Synthetic test data generation for DevOps CI/CD pipelines - enables safe, repeatable testing against Optim without touching production data',
      'Built as a reusable library: import as a dependency or run standalone; includes comprehensive API reference documentation and setup guides',
    ],
    githubUrl: 'https://github.com/Henry-Xiao-HX/IBM-Bob-and-Optim',
    demoUrl: 'https://github.com/Henry-Xiao-HX/IBM-Bob-and-Optim',
    status: 'Deprecated',
    isIBMInternal: false,
    year: '2026',
  },
];

export const articles = [
  {
    id: 'llm-wiki-pattern',
    title: 'Applying Karpathys LLM Wiki Pattern: Building a Compounding Knowledge Base for Tech Sellers with IBM Bob',
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
  {
    id: 'agent-observability',
    title: 'Agent Observability: From Developer Debugging to Enterprise Governance',
    date: 'April 1, 2026',
    readTime: '6 min',
    excerpt: 'As enterprises move from AI experimentation to autonomous agent production, observability becomes the key bottleneck. This post explores a multi-tiered framework distinguishing developer-centric correctness (LangSmith) from enterprise-grade operational governance (watsonx.orchestrate).',
    tags: ['Observability', 'Agentic AI', 'LangSmith', 'watsonx', 'Enterprise AI'],
    url: 'https://henry-xiao-hx.com/posts/Agent-Observability/',
    status: 'Published',
  },
  {
    id: 'local-ai-agent-dinner',
    title: 'Minimal Architecture: I Built a Local AI Agent to Help Decide What to Cook for Dinner',
    date: 'March 13, 2026',
    readTime: '6 min',
    excerpt: 'A personal project exploring simplicity: a local AI agent that reads what\'s in the fridge, remembers food preferences, suggests recipes, and learns from conversation history - running entirely on a laptop with Ollama.',
    tags: ['AI Agent', 'Local LLM', 'Ollama', 'Personal Project'],
    url: 'https://medium.com/@henry-xiao-hx/minimal-architecture-i-built-a-local-ai-agent-to-help-decide-what-to-cook-for-dinner-e0267e60ce84',
    status: 'Published',
  },
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
    id: 'data-engineer-agent',
    title: 'I Built a Data Engineer Agent with Three Agentic Frameworks',
    date: 'March 1, 2026',
    readTime: '6 min',
    excerpt: 'A hands-on comparison of IBM watsonx.orchestrate, LangGraph, and CrewAI for building a Data Engineer Agent - covering framework philosophy, developer experience, and which is best suited for enterprise, rapid prototyping, or scalable production.',
    tags: ['Data Engineering', 'Agentic AI', 'LangGraph', 'CrewAI', 'watsonx'],
    url: 'https://henry-xiao-hx.com/posts/Data-Engineer-Agent/',
    status: 'Published',
  },
];


// Made with Bob

