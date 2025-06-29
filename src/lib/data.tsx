import Link from 'next/link';

import { buttonVariants } from '@/components/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Streamify',
    description:
      'A fullstack video conferencing and chat web app, hosted locally with peer-to-peer functionality.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    links: {
      preview: 'https://streamify-ochre.vercel.app',
      github: 'https://github.com/aayushmishramechatronics/streamify',
      githubApi:
        'https://api.github.com/repos/aayushmishramechatronics/streamify',
    },
    badges: ['AI', 'WebRTC', 'P2P'],
  },
  {
    image: '/images/project-1.webp',
    title: 'PrepWise AI',
    description:
      'An AI-powered voice-based fullstack web app to simulate interview experiences.',
    technologies: ['Next.js', 'TypeScript', 'Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://prepwise-beta.vercel.app/',
      github: 'https://github.com/aayushmishramechatronics/prepwise-ai',
      githubApi:
        'https://api.github.com/repos/aayushmishramechatronics/prepwise-ai',
    },
    badges: ['AI', 'Voice Interface', 'Interview'],
  },
] as const;

export const experiencesData = [
  {
    title: 'SCADA Trainee',
    company: 'ONGC, Mumbai IN',
    description:
      'Configured HMI Interfaces and Integrated Field Instrumentation via PLCs using Modbus Protocol. Gained exposure to SCADA Architecture, Telemetry, and Industrial Communication Standards.',
    period: '2025',
    technologies: ['PLC', 'C++', 'C'],
    badges: ['SCADA', 'Automation'],
  },
  {
    title: 'Technical Content Writer & Freelancer',
    company: 'Freelancing, Remote',
    description:
      'Writing and Reviewing Technical Articles based on variety of topics like Embedded C, Typescript, Javascript and also Freelancing in Full-Stack Web Development.',
    period: '2025',
    technologies: ['Next.js', 'TypeScript', 'JavaScript', 'Tailwind'],
    badges: ['Content Writing', 'Freelance'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Rydeu, Remote',
    description:
      'Collaborated with senior engineers in an agile team to enhance user interfaces using React and Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    badges: ['Internship', 'Agile'],
  },
  {
    title: 'UG Researcher',
    company: 'MIT Manipal, Remote',
    description: (
      <>
        At MIT, I collaborated with professors and post-graduates to research and
        build{' '}
        <Link
          className={cn(
            buttonVariants({ variant: 'link' }),
            'm-0 h-fit p-0 text-base'
          )}
          href="https://geoscan-app.com"
          target="_blank"
        >
          geoscan-app.com
        </Link>{' '}
        — a platform for generating ground radar reports. I&apos;m responsible for
        developing and maintaining the frontend, as well as designing UI/UX to
        ensure a clear and intuitive user experience.
      </>
    ),
    period: '2024',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
    badges: ['Research', 'GIS'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" />, label: 'HTML' },
  { icon: <Icons.css className="size-12" />, label: 'CSS' },
  { icon: <Icons.sass className="size-12" />, label: 'SASS' },
  { icon: <Icons.tailwind className="size-12" />, label: 'Tailwind CSS' },
  { icon: <Icons.javascript className="size-12" />, label: 'JavaScript' },
  { icon: <Icons.typescript className="size-12" />, label: 'TypeScript' },
  { icon: <Icons.react className="size-12" />, label: 'React' },
  { icon: <Icons.redux className="size-12" />, label: 'Redux' },
  { icon: <Icons.nextjs className="size-12" />, label: 'Next.js' },
  { icon: <Icons.nestjs className="size-12" />, label: 'Nest.js' },
  { icon: <Icons.prisma className="size-12" />, label: 'Prisma' },
  { icon: <Icons.docker className="size-12" />, label: 'Docker' },
  { icon: <Icons.c className="size-12" />, label: 'C' },
  { icon: <Icons.cpp className="size-12" />, label: 'C++' },
  { icon: <Icons.plc className="size-12" />, label: 'PLC' },
] as const;
