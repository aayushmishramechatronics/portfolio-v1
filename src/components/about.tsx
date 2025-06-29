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
      <div className="-mt-5 max-w-2xl px-4 text-center leading-7 sm:px-6">
        <p className="mb-4">
          I'm Aayush Mishra, a full-stack developer from India. I enjoy
          prototyping fast, debugging smarter, and scaling solutions that solve
          real-world problems.
        </p>
        <p className="mb-4">
          I explore systems that blend hardware with intelligence, and I'm
          always experimenting — whether it's building CAD models,
          designing PCBs, creating AI-integrated web apps, or automating
          workflows using PLCs and microcontrollers.
        </p>
        <p className="mb-4">
          I thrive on clean code, well-structured systems, and learning
          something new with every project I take on. Let's build something
          awesome together!
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};

