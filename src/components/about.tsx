'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Aayush Mishra, a full-stack developer from India. I enjoy
          prototyping fast, debugging smarter, and scaling solutions that solve
          real-world problems. I explore systems that blend hardware with
          intelligence, and I&apos;m always experimenting — whether it&apos;s
          building CAD models, designing PCBs, creating AI-integrated web apps,
          or automating workflows using PLCs and microcontrollers. I thrive on
          clean code, well-structured systems, and learning something new with
          every project I take on.
        </p>
        <p>
          I&apos;m open to collaboration, freelancing, or full-time
          opportunities where I can contribute, learn, and grow. If you have a
          project or role that aligns with my skills, feel free to reach out —
          let&apos;s build something awesome together!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
