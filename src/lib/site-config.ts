import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Michał Skolak | Front-end developer',
  description:
    "Hello, I'm Aayush. I'm a Full-Stack Developer from India. I enjoy Building Sites and Apps. My focus is React (Next.js).",
  keywords: [
    'Aayush Mishra',
    'Full-Stack Developer',
    'India',
    'React',
    'Next.js',
    'Web Development',
    'Full-Stack',
    'UI/UX',
    'Responsive Design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web Applications',
    'Developer',
    'Code',
    'Programming',
    'Tech Enthusiast',
  ],
  url: env.SITE_URL || 'https://example.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
