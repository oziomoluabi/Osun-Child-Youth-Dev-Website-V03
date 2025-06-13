import { BookOpen, HeartPulse, Briefcase, Shield, Users, Rss, Info, Phone } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Data Dashboard', href: '/#dashboard' },
  { name: 'Education', href: '/education' },
  { name: 'Health', href: '/health' },
  { name: 'Employment', href: '/employment-skills' },
  { name: 'Child Protection', href: '/child-protection' },
  { name: 'Civic Engagement', href: '/civic-engagement' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const keyDimensions = [
  {
    title: 'Education',
    icon: BookOpen,
    stat: '71% NECO Pass Rate',
    description: 'Analyzing access, quality, performance, and programs like O-MEALS shaping the educational landscape.',
    href: '/education',
  },
  {
    title: 'Health & Well-Being',
    icon: HeartPulse,
    stat: '7.2% Stunting Rate',
    description: 'Insights into child nutrition, adolescent health, and healthcare access through PHCs and OHIS.',
    href: '/health',
  },
  {
    title: 'Employment & Skills',
    icon: Briefcase,
    stat: '11.7% Youth Unemployment',
    description: 'Examining the job market, skills development programs like O-YES, and entrepreneurship trends.',
    href: '/employment-skills',
  },
  {
    title: 'Child Protection',
    icon: Shield,
    stat: 'CRA Domestication',
    description: 'Focusing on legal frameworks, child labor, abuse, and institutional responses to protect vulnerable children.',
    href: '/child-protection',
  },
  {
    title: 'Civic Engagement',
    icon: Users,
    stat: '"Not Too Young To Run"',
    description: 'Tracking youth participation in governance, youth organizations, and community involvement.',
    href: '/civic-engagement',
  },
];

export const latestNews = [
    {
        tag: 'Policy Update',
        title: 'Osun State Jumps to 7th in National NECO Rankings',
        summary: 'A remarkable improvement from 33rd position is attributed to recent educational reforms and investments in teacher welfare.',
        href: '/news-events#neco-ranking-2024'
    },
    {
        tag: 'Program Launch',
        title: 'Osun UpSkill Program Targets 50,000 Youths for Digital Literacy',
        summary: 'A new initiative aims to bridge the digital divide by training young entrepreneurs in ICT, business development, and soft skills.',
        href: '/news-events#upskill-launch'
    },
    {
        tag: 'Success Story',
        title: 'O-MEALS Credited with Reducing Out-of-School Figures to 100,000',
        summary: 'The homegrown school feeding program continues to be a major driver for school enrollment and retention, showing a significant drop from 150,000.',
        href: '/news-events#o-meals-impact'
    }
];

export const footerLinks = {
  quickLinks: [
    { name: 'Data Dashboard', href: '/#dashboard' },
    { name: 'Full Report', href: '/data-downloads' },
    { name: 'Methodology', href: '/about#methodology' },
    { name: 'Get Involved', href: '/contact#volunteer' },
  ],
  dimensions: [
    { name: 'Education', href: '/education' },
    { name: 'Health', href: '/health' },
    { name: 'Employment', href: '/employment-skills' },
    { name: 'Child Protection', href: '/child-protection' },
    { name: 'Civic Engagement', href: '/civic-engagement' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ]
};
