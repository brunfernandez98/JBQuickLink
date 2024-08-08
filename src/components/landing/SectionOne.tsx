'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

import ButtonBorder from '../Buttons/ButtonBorder';
import { animationVariants } from '../FramerVariants';
import HeadingText from '../Text/HeadingText';

const SectionOne = () => {
  const t = useTranslations('Index');
  return (
    <motion.div
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
      className=""
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.div
          variants={animationVariants.fadeDown}
          className="flex sm:justify-center"
        >
          <span className="block rounded-full border border-rusty-700 bg-rusty-800 px-4 py-1 text-center font-medium text-rusty-400 lg:text-lg">
            Hi there 👋🏻
          </span>
        </motion.div>
        <motion.div
          className="relative items-center"
          variants={animationVariants.fadeDown}
        >
          <HeadingText
            variant="h1"
            classes="whitespace-nowrap bg-gradient-to-br bg-clip-text text-transparent from-white to-gray-500 mt-8 sm:text-center"
          >
            {t('title_1')}
            <br />
            <span className="bg-gradient-to-r from-teal-200 via-blue-400 to-blue-200 bg-clip-text font-black leading-snug text-transparent">
              {t('title_2')}
            </span>
            <br />
            {t('title_3')}
          </HeadingText>
          {/* subtitle */}
          <motion.p
            variants={animationVariants.fadeDown}
            className="mt-8 max-w-md text-xl text-rusty-400 sm:mx-auto sm:max-w-[38rem] sm:text-center lg:max-w-[45rem] lg:text-2xl"
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            className="mt-8 sm:flex sm:justify-center"
            variants={animationVariants.fadeDown}
          >
            <ButtonBorder
              text="Get Started"
              iconClassName="text-white text-lg mx-2"
              icon={GoArrowRight}
            />
          </motion.div>
        </motion.div>
      </div>
      <p className="">Hola</p>
    </motion.div>
  );
};

export default SectionOne;
