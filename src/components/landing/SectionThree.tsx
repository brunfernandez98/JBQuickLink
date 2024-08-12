'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { AnimatedTooltipPreview } from '../AnimatedTooltip/AnimatedTooltipPrev';
import { CARDS } from '../Card/CardExample';
import { CardStack } from '../Card/CardStack';
import StarRating from '../Stars/StarRating';
import HeadingText from '../Text/HeadingText';

const SectionThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="relative isolate overflow-hidden bg-gradient-to-br from-slate-900 to-slate-500 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
    >
      <div className="mx-auto max-w-md py-10 lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
        <HeadingText
          variant="h3"
          classes="btext-xl font-bold tracking-tight text-white sm:text-4xl mt-4"
        >
          What our customers are saying
        </HeadingText>
        <p className="mt-6 text-sm leading-8 text-neutral-200 sm:text-lg">
          <span>
            &quot;I&apos;ve been using this app for a few months now and
            it&apos;s been a game changer. I can&apos;t imagine going back to
            the way I was doing things before.&quot;
          </span>
        </p>
        <div className="mt-10">
          <div className="mb-10 flex flex-col items-center justify-center sm:flex-row lg:justify-start">
            <div className="mb-4 flex flex-row items-center sm:mb-0">
              <AnimatedTooltipPreview />
            </div>

            {/* Stars */}
            <StarRating
              totalStars={5}
              className="mx-1 size-4 text-yellow-400"
            />
          </div>
        </div>
      </div>
      <div className="hidden w-full items-center justify-center text-blue-800 lg:flex">
        <CardStack items={CARDS} offset={20} scaleFactor={0.04} />
      </div>
    </motion.div>
  );
};

export default SectionThree;
