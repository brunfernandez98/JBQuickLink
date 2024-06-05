'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';

import ButtonShadow from '../Buttons/ButtonShadow';
import { HeaderAuthVariants } from '../FramerVariants';

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
};

const HeaderAuth = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={HeaderAuthVariants}
        className={` ${isScrolled && 'border-rusty-50/10 backdrop-blur-sm transition-all duration-300 '} inset-x-0 top-0 z-50 mx-auto flex min-h-12 flex-wrap items-center justify-between gap-4 px-4 py-2 shadow-md shadow-primary/5 sm:sticky  sm:w-[95%] sm:max-w-7xl sm:rounded-lg sm:px-4 lg:px-8`}
      >
        {/* This is mobile screen */}
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2 sm:hidden"
        >
          <Image
            src="/logo-2.svg"
            className=""
            width={100}
            height={12}
            alt="Logo"
            priority
          />
          <span className="whitespace-nowrap text-xl font-black text-white md:text-2xl">
            QuickLink
          </span>
        </motion.div>
        {/* This is tablet desktop screen */}
        <motion.div
          variants={itemVariants}
          className="hidden items-center sm:relative sm:block sm:grow sm:basis-0"
        >
          <Image
            src="/logo.svg"
            className="scale-110"
            width={120}
            height={240}
            alt="Logo"
            priority
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative hidden basis-3/5 justify-end gap-6 sm:flex sm:basis-3/5 sm:gap-8 md:grow md:basis-0 lg:basis-0"
        >
          <div className="grow items-center justify-end space-x-4 sm:flex md:order-2 rtl:space-x-reverse">
            <ButtonShadow
              text="Sign In"
              iconClassName="text-white backdrop-blur-3xl  sm:text-base md:text-sm lg:text-sm mx-2"
              icon={FiGithub}
            />
          </div>
        </motion.div>
      </motion.header>
    </AnimatePresence>
  );
};

export default HeaderAuth;
