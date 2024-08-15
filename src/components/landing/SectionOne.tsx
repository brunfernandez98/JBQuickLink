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
    >
      <div className="relative mx-auto max-w-screen-xl">
        <motion.div
          className="relative items-center"
          variants={animationVariants.fadeDown}
        >
          <div className="absolute -left-4 top-0 animate-blob rounded-full bg-blue-300 opacity-70 mix-blend-multiply blur-2xl sm:size-72 md:size-72" />
          <div className="absolute -right-4 top-0 size-20 animate-blob rounded-full bg-green-300 opacity-70 mix-blend-multiply blur-2xl animation-delay-2000 sm:size-72 md:size-72" />
          <div className="absolute bottom-32 size-20 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-2xl animation-delay-4000 sm:left-32 md:-bottom-8 md:size-72" />

          {/* Container with backgrop-blur */}
          <div className="md:rounded-3xl md:bg-white/70 md:p-8 md:shadow-lg md:backdrop-blur-lg md:dark:bg-black/60">
            <motion.div
              variants={animationVariants.fadeDown}
              className="flex justify-center"
            >
              <span className="block rounded-full border border-rusty-700 bg-rusty-800 px-4 py-1 text-center font-medium text-rusty-400 lg:text-lg">
                New version v2.4.0
                <span aria-hidden="true" className="ml-1">
                  🚀
                </span>
              </span>
            </motion.div>
            <div className="text-center">
              <div className="inline-block">
                <HeadingText
                  variant="h1"
                  classes="bg-gradient-to-br tracking-tight   bg-clip-text text-transparent from-white to-gray-500 mt-8 sm:text-center"
                >
                  {t('title_1')}
                </HeadingText>
              </div>
              <br />
              <HeadingText
                variant="h1"
                classes="tracking-tight inline font-semibold from-[#FF1CF7] to-[#b249f8] text-[2.5rem] lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b"
              >
                {t('title_2')}
              </HeadingText>
              <br />
              <HeadingText variant="h1" classes="inline tracking-tight ">
                {t('title_3')}
              </HeadingText>
            </div>
            {/* subtitle */}
            <motion.p
              variants={animationVariants.fadeDown}
              className="text-n-2 mx-auto mb-6 mt-8 max-w-3xl text-center sm:mx-auto sm:max-w-[38rem] lg:mb-8 lg:max-w-[45rem] lg:text-2xl"
            >
              {t('subtitle')}
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              variants={animationVariants.fadeDown}
            >
              <ButtonBorder
                text="Get Started"
                iconClassName="text-white text-lg mx-2"
                icon={GoArrowRight}
              />
            </motion.div>
          </div>
          {/* Fin del contenedor con fondo desenfocado */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionOne;
