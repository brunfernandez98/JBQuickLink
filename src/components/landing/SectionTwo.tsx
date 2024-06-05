'use client';

import { motion } from 'framer-motion';
import React from 'react';

const SectionTwo = () => {
  // const t = useTranslations('Index');
  return (
    <motion.section
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="xs:p-8 relative z-10 px-6 py-12 sm:p-16"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-screen-xl">
        <motion.h1 className="text-center text-4xl font-bold text-white">
          Section Two
        </motion.h1>
        <motion.p className="mt-4 text-center text-white">
          This is section two
        </motion.p>
      </div>
    </motion.section>
  );
};

export default SectionTwo;
