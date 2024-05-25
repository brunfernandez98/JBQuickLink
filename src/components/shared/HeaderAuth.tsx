'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { FiGithub } from 'react-icons/fi';

import ButtonShadow from '../buttons/ButtonShadow';
import { HeaderAuthVariants } from '../variants';

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
};

const HeaderAuth = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={HeaderAuthVariants}
        className="sticky inset-x-0 top-0 z-50 mx-auto flex w-[95%] 
      max-w-7xl flex-wrap  
      items-center justify-between
      gap-4 rounded-lg px-4
     py-2  shadow-md shadow-primary/5 sm:px-4  lg:px-8 dark:shadow-none dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-primary/75"
      >
        <div className="absolute inset-0 w-full bg-nav-gradient blur-[125px]" />
        <motion.div
          variants={itemVariants}
          className="relative grow basis-0 items-center "
        >
          <Image src="/logo.svg" width={100} height={100} alt="Logo" priority />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative flex basis-3/5 justify-end gap-6 sm:basis-3/5 sm:gap-8 md:grow md:basis-0 lg:basis-0"
        >
          <div className="flex grow items-center justify-end space-x-4 md:order-2 rtl:space-x-reverse">
            <ButtonShadow
              text="Sign In"
              iconClassName="text-white backdrop-blur-3xl  sm:text-base md:text-sm lg:text-sm mx-2"
              icon={FiGithub}
            />
          </div>
        </motion.div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default HeaderAuth;
