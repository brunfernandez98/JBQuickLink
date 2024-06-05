'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

import ButtonBorder from '../Buttons/ButtonBorder';
import { FadeDownVariant } from '../FramerVariants';

const Hero = () => {
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
      className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8"
      style={{
        backgroundImage: `url('/path/to/your/background/image.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <motion.div
          variants={FadeDownVariant}
          className="flex size-[600px] items-center justify-center rounded-full bg-gray-900 bg-opacity-50"
          style={{
            boxShadow: '0 0 10px rgba(30, 32, 90, 0.5)',
            backdropFilter: 'blur(2px)',
          }}
        >
          <div>
            <motion.h1
              variants={FadeDownVariant}
              className="text-3xl leading-none tracking-tight sm:text-3xl md:text-[2.625rem] lg:text-4xl"
            >
              {t('title_1')}
              <br />
              {t('title_2')}
              <br />
              {t('title_3')}
            </motion.h1>
            <motion.p
              variants={FadeDownVariant}
              className="mt-6 max-w-2xl text-lg leading-8"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div variants={FadeDownVariant} className="mt-4">
              <ButtonBorder
                text="Get Started"
                iconClassName="text-white backdrop-blur-3xl text-base sm:text-base md:text-sm lg:text-sm mx-2"
                icon={GoArrowRight}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
