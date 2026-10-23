export const profile = {
  name: 'Oluwaseyi Hassan',
  role: 'Software Engineer',
  location: 'Osun, Nigeria',
  timezone: 'Africa/Lagos',
  email: 'hassanabdullahioluwaseyi@gmail.com',
  github: 'https://github.com/oluwaseyihassan',
  linkedin: 'https://linkedin.com/in/oluwaseyihassan',
  parascores: 'https://parascores.com',
}

export const navItems = [
  { id: 'work', label: 'Work', index: '01' },
  { id: 'experience', label: 'Experience', index: '02' },
  { id: 'about', label: 'About', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
] as const

export const stats = [
  { value: '4+', label: 'years building for the web' },
  { value: '~500', label: 'registered ParaScores users' },
  { value: '20+', label: 'tournaments hosted' },
  { value: '1,300+', label: 'production commits' },
]

export const caseStudy = {
  role: 'Founder & sole engineer',
  timeline: '2025 — present',
  link: 'https://parascores.com',
  problem:
    'Grassroots tournaments run on WhatsApp screenshots, paper tables and a scoreboard someone updates by hand. Organizers need somewhere to run the competition. Fans need scores that update without refreshing. ParaScores does both, for 20+ competitions across Nigerian universities.',
  bullets: [
    '28 NestJS domain modules with JWT refresh rotation, Google OAuth and role-based access for users, organizers, owners and admins.',
    'Sub-second scoring over Server-Sent Events with Redis hot state, synchronized match clocks and idempotent event ingestion.',
    'Paystack payment flows: Pro subscriptions, team-registration splits and automated organizer payouts with retry backoff.',
    'One Nuxt 4 codebase serving the public, organizer and admin surfaces through dynamic subdomain routing.',
    'PWA with offline support, embeddable score widgets, server-generated share images and venue mapping.',
  ],
  scoreboard: [
    { value: '~500', label: 'users' },
    { value: '20+', label: 'competitions' },
    { value: '1,300+', label: 'commits' },
    { value: '99.9%', label: 'uptime' },
  ],
}

export const projects = [
  {
    id: 'parascore',
    name: 'ParaScore',
    summary:
      'A football livescore app with fixtures, standings and news, kept current with short polling.',
    stack: 'React · Firebase · Tailwind',
    year: '2024',
    details:
      'Connected a third-party football API to Firebase and built the polling layer that keeps live scores and match events fresh without a page reload.',
    link: 'https://parascore.vercel.app/',
    linkLabel: 'parascore.vercel.app',
  },
  {
    id: 'dreyxinx',
    name: 'DreyXinx',
    summary:
      'A full-stack storytelling platform with authoring, comments, likes and bookmarks.',
    stack: 'React · Node · Express · Firebase',
    year: '2024',
    details:
      'Reader and author workflows, Markdown writing, protected routes and real-time social features, with a responsive layout built for long-form reading.',
    link: null,
    linkLabel: null,
  },
  {
    id: 'lineup-builder',
    name: 'Lineup Builder',
    summary:
      'A drag-and-drop tactics board for building and sharing football formations.',
    stack: 'React · TypeScript · HTML5 DnD',
    year: '2024',
    details:
      'Custom formation state, pitch placement and URL-serialised lineups, with touch support so a team sheet can be built on a phone.',
    link: 'https://line-up-builder.vercel.app/',
    linkLabel: 'line-up-builder.vercel.app',
  },
  {
    id: 'player-comparison',
    name: 'Player Comparison',
    summary:
      'A football analytics dashboard for comparing players across seasons and leagues.',
    stack: 'React · TanStack Query',
    year: '2024',
    details:
      'Built around cached server state, so changing filters and comparing players stays responsive.',
    link: null,
    linkLabel: null,
  },
]

export const experience = [
  {
    period: '2025 — Present',
    role: 'Founder & Lead Engineer',
    company: 'ParaScores',
    place: 'Remote',
    href: 'https://parascores.com',
    points: [
      'Designed and shipped a 28-module NestJS API, three Nuxt surfaces and a real-time scoring engine. Grew it to ~500 users without a team.',
      'Added Paystack subscriptions, registration splits and automated payouts, plus a PWA, embeddable widgets and generated share cards.',
    ],
  },
  {
    period: '2023 — 2024',
    role: 'Freelance & Independent Developer',
    company: 'Self-employed',
    place: 'Remote',
    href: null,
    points: [
      'Built custom React and Node dashboards with authentication, role guards, real-time comments and admin reporting.',
      'Cut client load times by up to 35% through code splitting, asset compression and caching.',
    ],
  },
  {
    period: '2023',
    role: 'Frontend Engineer Intern',
    company: 'HNG Tech',
    place: 'Remote',
    href: null,
    points: [
      'Shipped responsive React and TypeScript features with designers and backend engineers on a remote agile team.',
      'Turned Figma specs into accessible components, and took part in peer code reviews and continuous integration.',
    ],
  },
]

export const stack = [
  { label: 'Languages', value: 'TypeScript, JavaScript, SQL, Python, Go' },
  { label: 'Backend', value: 'Node.js, NestJS, Express, REST, SSE, Redis' },
  { label: 'Frontend', value: 'React, Next.js, Vue 3, Nuxt 4, TanStack Query, Tailwind' },
  { label: 'Data', value: 'PostgreSQL, Prisma, Redis, Firestore' },
  { label: 'DevOps & QA', value: 'Docker, Jest, Playwright, Sentry, CI/CD' },
  { label: 'Payments', value: 'Paystack: subscriptions, splits, payouts, webhooks' },
]
