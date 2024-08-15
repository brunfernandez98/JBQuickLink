'use client';

import { motion } from 'framer-motion';
import React from 'react';

import HeadingText from '../Text/HeadingText';
import CardPricingSection from '../Card/CardPricingSelector';

const SectionThree = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="relative isolate bg-transparent px-6 py-0 sm:py-10 lg:px-8"
    >
      <div className="mb-12 flex-col items-center">
        <HeadingText
          variant="h1"
          classes="bg-clip-text sm:text-center tracking-tight text-4xl font-bold text-white"
        >
          Flexible Pricing Plans{' '}
          <p className="bg-blue-gradient bg-clip-text font-black leading-snug text-transparent">
            for Every Need
          </p>{' '}
        </HeadingText>
        <p className="my-2 block w-full text-lg font-normal text-n-2 mx-auto mb-6 mt-8 max-w-3xl sm:mx-auto sm:max-w-[38rem] sm:text-center lg:mb-8 lg:max-w-[45rem] text-primary lg:text-xl">
          Choose the plan that suits you best and start shortening links
          efficiently
        </p>
      </div>
      <div className="mx-auto grid max-w-[83rem] grid-cols-1 items-center gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardPricingSection />
      </div>
    </motion.div>
  );
};

export default SectionThree;
