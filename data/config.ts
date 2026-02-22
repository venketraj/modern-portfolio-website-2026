import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import {
  SiPython,
  SiDocker,
  SiGit,
  SiGraphql,
  SiDatabricks,
  SiSnowflake,
  SiInformatica,
  SiMysql,
  SiGithub,
  SiLinux,
  SiAmazon
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';

// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE ONLY FILE YOU NEED TO EDIT TO PERSONALISE YOUR PORTFOLIO.
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Personal Info ─────────────────────────────────────────────────────────
  name: 'Venket Raj S',
  title: 'ETL Developer',
  taglines: [
    'Transforming Data Pipelines Today, Engineering AI Agents for Tomorrow',
    'SQL Craftsman | Python Builder | Snowflake Developer | AI Agent Explorer.',
    'From ETL to Intelligent Agents — One Query at a Time.',
  ],
  bio: `ETL Developer by craft, Data Engineer by ambition, AI Builder by passion. I architect reliable data pipelines, engineer Snowflake-powered warehouses, and build intelligent AI agents — turning raw data into decisions that matter.`,
  avatar: '/profile.png',   // Replace with your photo path (or leave blank for initials)
  location: 'Madurai, IN',
  availableForWork: true,

  // ── SEO ───────────────────────────────────────────────────────────────────
  siteUrl: 'https://venketraj.dev',
  siteTitle: 'Venket Raj — ETL Developer',
  siteDescription:
    'Portfolio of Venket Raj, an ETL developer specialising in Snowflake, Python, and SQL',
  ogImage: '/og-image.png',

  // ── Navigation ────────────────────────────────────────────────────────────
  navLinks: [
    { label: 'About',      href: '#about' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact',    href: '#contact' },
  ],

  // ── Contact ───────────────────────────────────────────────────────────────
  email: 'sundarvenket16@yahoo.com',
  socials: [
    { label: 'GitHub',   href: 'https://github.com/venketraj',   icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/venket-raj-s-614518198', icon: FiLinkedin }
  ],

  // ── Projects ──────────────────────────────────────────────────────────────
  projects: [
    {
      title: 'CloudDash — SaaS Analytics Platform',
      description:
        'A real-time analytics dashboard with multi-tenant support, custom chart builder, and AI-powered insights. Handles 1M+ events/day.',
      image: '/projects/clouddash.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS'],
      liveUrl: 'https://clouddash.example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'ShopFlow — E-commerce Engine',
      description:
        'Headless e-commerce solution with inventory management, Stripe payments, and a drag-and-drop storefront builder.',
      image: '/projects/shopflow.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      liveUrl: 'https://shopflow.example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      title: 'Code Review Agent',
      description:
        'A Streamlit web app that refactors Python or C code using AI — either a local Ollama model or the Mistral Codestral cloud API — following user-defined guidelines. All runs are saved to Supabase for history and replay.',
      image: '/projects/code-corrector.png',
      tags: ['Python', 'Streamlit', 'LLM', 'Generative AI'],
      githubUrl: 'https://github.com/venketraj/AI-Code-Corrector.git',
      featured: true,
    },
    {
      title: 'NoteAI — Smart Note Taking',
      description:
        'AI-powered note-taking app with auto-summarisation, semantic search, and knowledge graph visualisation.',
      image: '/projects/noteai.jpg',
      tags: ['Next.js', 'Python', 'OpenAI', 'Pinecone'],
      liveUrl: 'https://noteai.example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
  ],

  // ── Skills ────────────────────────────────────────────────────────────────
  // level: 0–100  |  category: 'Language' | 'Framework' | 'Tool' | 'Cloud'
  skills: [
    { name: 'Snowflake',    icon: SiSnowflake,    level: 70, category: 'Tool',  color: 'text-blue-400'   },
    { name: 'Informatica',  icon: SiInformatica,  level: 60, category: 'Tool',  color: 'text-yellow-400' },
    { name: 'Python',       icon: SiPython,       level: 70, category: 'Language',  color: 'text-green-400'  },
    { name: 'Databricks',   icon: SiDatabricks,   level: 40, category: 'Tool', color: 'text-cyan-400'   },
    { name: 'Azure',        icon: TbBrandAzure,   level: 50, category: 'Cloud', color: 'text-blue-400'   },
    { name: 'Linux',        icon: SiLinux,        level: 78, category: 'Tool', color: 'text-pink-400'   },
    { name: 'SQL',          icon: SiMysql,        level: 70, category: 'Lauguage',      color: 'text-blue-300'   },
    { name: 'Docker',       icon: SiDocker,       level: 30, category: 'Tool',      color: 'text-sky-500'    },
    { name: 'Github',       icon: SiGithub,       level: 60, category: 'Tool',      color: 'text-orange-400' },
    { name: 'AWS Strands',  icon: SiAmazon,       level: 60, category: 'Framework',      color: 'text-orange-400' },
],

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: 'HCL Tech.',
      logo: '/logos/hcltech.png',                      // e.g. '/logos/hcl.png' — leave empty to use Clearbit
      companyUrl: 'hcltech.com',
      role: 'Senior Software Engineer',
      period: 'Feb 2025 – Present',
      description:
        '● I am responsible for developing various ETL workflows as per the business requirements. Managing the ongoing production data warehouse with various management tools and working on enhancements.Actively volunteer with the AI Club outside my regular work hours, immersing myself in the latest AI concepts and technologies. I contribute to solution development, lead engaging initiatives, and participate in activities that foster both professional growth and innovation within the AI community',
      skills: ['Informatica', 'SQL', 'Control M', 'Oracle'],
    },
    {
      company: 'Tata Consultancy Services',
      logo: '/logos/tcs.png',                      // e.g. '/logos/tcs.png' — leave empty to use Clearbit
      companyUrl: 'tcs.com',
      role: 'System Engineer',
      period: 'Nov 2021 – Feb 2025',
      description:
        "● Worked on development of a Unified Reporting Platform for JCPenney, processing data for 50+ complex analytical reports across multiple business domains. Applied advanced ETL logic to integrate data from sources like POS, RMS, and Sales, improving data consistency by 25% and reducing load times by 40%. Managed SIT and UAT, ensuring 99.9% data accuracy and cutting post-production issues by 30%. Improved report and dashboard performance by 35%, reducing query response times by 50% and enhancing decision-making efficiency.",
      skills: ['Snowflake', 'Python', 'SQL', 'Linux', 'Microstrategy'],
    },
    {
      company: 'Srushty Global Solution',
      logo: '/logos/srushty.png',                      // e.g. '/logos/srushty.png' — leave empty to use Clearbit
      companyUrl: 'srushty.com',
      role: 'Junior Design Engineer',
      period: 'Dec 2020 – Oct 2021',
      description:
        '● Developed an innovative SMART wristband that monitored heart rate and detected stress levels, resulting in improved user-guided meditation experiences; findings used to fix three biggest causes of user disengagement.It helped to people to reduce stress and improves meditation by using heart pulse and accelerometer sensors.Achieved a 30% improvement in stress reduction and a 20% increase in meditation efficiency for users, as measured by Realtime biometric data analysis',
      skills: ['Embedded C', 'Microcontroller', 'Raspberry Pi', 'Nordic'],
    },
  ],

  footerText: '© 2026 Venket Raj. Crafted with Next.js & Tailwind CSS.',
} as const;

export type Config = typeof config;
