'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

import ButtonBorder from '../buttons/ButtonBorder';
import { FadeDownVariant } from '../variants';

const SectionOne = () => {
  const t = useTranslations('Index');
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
      className="relative mx-auto  flex max-w-7xl flex-col items-center justify-center rounded-full px-6 lg:px-8"
    >
      <motion.h1
        variants={FadeDownVariant}
        className="h1 text-balance text-3xl leading-none tracking-tight text-white 
              sm:text-3xl md:text-[4.625rem] lg:text-[4.25rem]"
      >
        {t('title_1')}
        <br />
        {t('title_2')}
        <br />
        {t('title_3')}
      </motion.h1>
      {/* subtitle */}
      <motion.p
        variants={FadeDownVariant}
        className="mb-7 max-w-2xl text-center text-lg leading-8"
      >
        {t('subtitle')}
      </motion.p>
      <motion.div variants={FadeDownVariant}>
        <ButtonBorder
          text="Get Started"
          iconClassName="text-white backdrop-blur-3xl text-base sm:text-base md:text-sm lg:text-sm mx-2"
          icon={GoArrowRight}
        />
      </motion.div>
    </motion.section>
  );
};

export default SectionOne;
