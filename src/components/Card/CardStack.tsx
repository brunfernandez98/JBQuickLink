

'use client';

import { Avatar } from '@nextui-org/avatar';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  avatar: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 20;
  const SCALE_FACTOR = scaleFactor || 0.04;
  const [cards, setCards] = useState<Card[]>(items);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative size-80 md:h-80 md:w-[28rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-80 w-[28rem] flex-col justify-between gap-6 rounded-3xl border border-neutral-200 bg-white p-8 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05]"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <Avatar
              src={card.avatar}
              alt={card.name}
              isBordered
              size="lg"
              radius="full"
            />
            <div className="font-normal text-neutral-700 dark:text-black">
              {card.content}
            </div>
            <div>
              <p className="font-medium text-neutral-500 dark:text-black">
                {card.name}
              </p>
              <p className="font-normal text-neutral-400 dark:text-black">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
