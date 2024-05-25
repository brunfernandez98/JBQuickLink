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
      <div className="absolute right-0 top-0 z-0 bg-lime-200" />
      <div className="mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-screen-xl">
        <p className="text-center text-[14px] font-normal"> Hola </p>
      </div>
    </motion.section>
  );
};

export default SectionTwo;
