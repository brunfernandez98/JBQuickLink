'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { generalVariants } from '../FramerVariants';
import HeadingText from '../Text/HeadingText';

const SectionTwo = () => {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={generalVariants}
      className="xs:p-8 relative z-10 flex justify-center px-6 py-12 sm:p-16"
    >
      <header>
        <span className="font-bold text-primary">How to start?</span>
        <HeadingText variant="h3" classes="text-4xl font-bold text-white">
          Section Two
        </HeadingText>
        <div className="mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-screen-xl">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-center text-white"
          >
            This is section two
          </motion.p>
        </div>
      </header>
    </motion.article>
  );
};

export default SectionTwo;
