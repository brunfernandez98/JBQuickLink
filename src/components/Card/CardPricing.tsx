import { Button } from '@nextui-org/button';
import React from 'react';

import HeadingText from '../Text/HeadingText';

type CardPricingProps = {
  title?: string;
  price?: string;
  description?: string;
  features?: string[];
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
};

const CardPricing: React.FC<CardPricingProps> = ({
  title = 'Default Title',
  price = 'Free',
  description = 'Default description',
  features = [],
  primaryAction = { label: 'Primary Action', onClick: () => {} },
  secondaryAction = { label: 'Secondary Action', onClick: () => {} },
}) => {
  return (
    <div className="animate-pricing hover:shadow-2xl flex h-full flex-col justify-between rounded-3xl border border-transparent bg-white/60 px-6 py-8 ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 dark:!border-white/[0.2] dark:!bg-black">
      <div>
        <HeadingText
          variant="h6"
          classes="text-base font-semibold leading-7 text-blue-400"
        >
          {title}
        </HeadingText>
        <p className="mt-4 gap-x-2">
          <span className="block h-6 text-sm text-gray-400 dark:text-white" />
          <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {price}
          </span>
        </p>
        <p className="mt-6 h-24 text-sm leading-7 text-gray-600 md:h-32 xl:h-24 dark:text-neutral-200">
          {description}
        </p>
        <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10 dark:text-neutral-100">
          {features.map((feature: string) => (
            <li key={feature} className="flex gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-5 flex-none text-blue-400"
                aria-hidden="true"
              >
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                  fill="currentColor"
                  strokeWidth="0"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Button
          aria-describedby="tier-title"
          className="mt-8 block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold bg-gradient-to-r from-blue-300 to-blue-500 text-white ring-1 ring-inset ring-blue-400 hover:ring-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 sm:mt-10"
          onClick={primaryAction.onClick}
        >
          {primaryAction.label}
        </Button>
        <Button
          aria-describedby="tier-title"
          className="mt-2 text-left text-xs text-neutral-500"
          onClick={secondaryAction.onClick}
        >
          {secondaryAction.label}
        </Button>
      </div>
    </div>
  );
};

export default CardPricing;
