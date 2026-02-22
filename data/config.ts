import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
  SiGraphql,
  SiAmazon,
} from 'react-icons/si';

// ─────────────────────────────────────────────────────────────────────────────
// THIS IS THE ONLY FILE YOU NEED TO EDIT TO PERSONALISE YOUR PORTFOLIO.
// ─────────────────────────────────────────────────────────────────────────────

export const config = {
  // ── Personal Info ─────────────────────────────────────────────────────────
  name: 'Alex Johnson',
  title: 'Full Stack Developer',
  taglines: [
    'Building beautiful web experiences.',
    'Turning ideas into reality.',
    'Open to new opportunities.',
  ],
  bio: `I'm a passionate full-stack developer with 5+ years of experience building
scalable web applications. I love working with modern JavaScript frameworks,
cloud technologies, and creating pixel-perfect UIs.`,
  avatar: '/avatar.png',   // Replace with your photo path (or leave blank for initials)
  location: 'San Francisco, CA',
  availableForWork: true,

  // ── SEO ───────────────────────────────────────────────────────────────────
  siteUrl: 'https://alexjohnson.dev',
  siteTitle: 'Alex Johnson — Full Stack Developer',
  siteDescription:
    'Portfolio of Alex Johnson, a full-stack developer specialising in React, Next.js, and Node.js.',
  ogImage: '/og-image.png',

  // ── Navigation ────────────────────────────────────────────────────────────
  navLinks: [
    { label: 'About',    href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Contact',  href: '#contact' },
  ],

  // ── Contact ───────────────────────────────────────────────────────────────
  email: 'hello@alexjohnson.dev',
  socials: [
    { label: 'GitHub',   href: 'https://github.com',   icon: FiGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: FiLinkedin },
    { label: 'Twitter',  href: 'https://twitter.com',  icon: FiTwitter },
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
      title: 'DevSync — Team Collaboration',
      description:
        'Real-time collaborative workspace for dev teams with Kanban boards, code snippet sharing, and Slack integration.',
      image: '/projects/devsync.jpg',
      tags: ['React', 'Socket.io', 'GraphQL', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      featured: false,
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
    { name: 'TypeScript',   icon: SiTypescript,  level: 95, category: 'Language',  color: 'text-blue-400'   },
    { name: 'JavaScript',   icon: SiJavascript,  level: 95, category: 'Language',  color: 'text-yellow-400' },
    { name: 'Python',       icon: SiPython,      level: 75, category: 'Language',  color: 'text-green-400'  },
    { name: 'React',        icon: SiReact,       level: 95, category: 'Framework', color: 'text-cyan-400'   },
    { name: 'Next.js',      icon: SiNextdotjs,   level: 90, category: 'Framework', color: 'text-white'      },
    { name: 'Node.js',      icon: SiNodedotjs,   level: 88, category: 'Framework', color: 'text-green-500'  },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 92, category: 'Framework', color: 'text-sky-400'    },
    { name: 'GraphQL',      icon: SiGraphql,     level: 78, category: 'Framework', color: 'text-pink-400'   },
    { name: 'PostgreSQL',   icon: SiPostgresql,  level: 82, category: 'Tool',      color: 'text-blue-300'   },
    { name: 'MongoDB',      icon: SiMongodb,     level: 80, category: 'Tool',      color: 'text-green-400'  },
    { name: 'Docker',       icon: SiDocker,      level: 80, category: 'Tool',      color: 'text-sky-500'    },
    { name: 'Git',          icon: SiGit,         level: 90, category: 'Tool',      color: 'text-orange-400' },
    { name: 'AWS',          icon: SiAmazon,      level: 75, category: 'Cloud',     color: 'text-orange-300' },
    { name: 'Figma',        icon: SiFigma,       level: 70, category: 'Tool',      color: 'text-purple-400' },
  ],

  // ── Experience ────────────────────────────────────────────────────────────
  experience: [
    {
      company: 'TechCorp Inc.',
      role: 'Senior Full Stack Developer',
      period: '2022 – Present',
      description:
        'Lead development of the core SaaS platform, mentored junior developers, and architected microservices migration.',
      skills: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      period: '2020 – 2022',
      description:
        'Built the MVP from scratch, scaled to 50k users, and implemented real-time features using WebSockets.',
      skills: ['React', 'Node.js', 'MongoDB', 'Docker'],
    },
    {
      company: 'Digital Agency',
      role: 'Frontend Developer',
      period: '2019 – 2020',
      description:
        'Delivered pixel-perfect React applications for clients across fintech, healthcare, and e-commerce.',
      skills: ['React', 'JavaScript', 'CSS', 'Figma'],
    },
  ],

  footerText: '© 2025 Alex Johnson. Crafted with Next.js & Tailwind CSS.',
} as const;

export type Config = typeof config;
