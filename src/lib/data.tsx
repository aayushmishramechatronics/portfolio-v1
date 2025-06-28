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
    title: 'Image-to-Text-Extractor',
    description:
      'uses image uploaded by user to- extract text from the image and translate it into any language for users convenience',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-aut', 'Prisma'],
    links: {
      preview: 'https://image-text-extractor-seven.vercel.app/',
      github: 'https://github.com/aayushmishramechatronics/ocr-translator',
      githubApi: 'https://api.github.com/repos/aayushmishramechatronics/ocr-translator',
    },
  },
  {
    image: '/images/project-1.webp',
    title: 'Streamify',
    description:
      'a full-stack video call and chat web-app for making new friends and socialising',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://streamify-ochre.vercel.app/',
      github: 'https://github.com/aayushmishramechatronics/streamify',
      githubApi: 'https://api.github.com/repos/aayushmishramechatronics/streamify',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'SCADA Trainee',
    company: 'ONGC, Mumbai',
    description:
      'during this internship, I focused on configuring HMI Interfaces and integrated Field Instrumentation via PLCs using Modbus Protocol.',
    period: '2025',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Frontend Developer & UI Designer',
    company: 'Freelancing, remote',
    description:
      'as a freelancer, I specialized in graphic design using Figma and Website Development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2024 - 2024',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Rydeu, remote',
    description:
      'during my internship at Rydeu, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Remote Front-End Developer',
    company: 'GeoScan, remote',
    description: (
      <>
        at MIT, I collaborated with GIS specialists to
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
        — a platform for generating real estate reports. I’m responsible for
        developing and maintaining the frontend, as well as designing UI/UX to
        ensure a clear and intuitive user experience.
      </>
    ),
    period: '2024 - present',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
