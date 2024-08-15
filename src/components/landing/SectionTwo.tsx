
'use client';

import { Button } from '@nextui-org/button';
import { Card, CardFooter, CardHeader } from '@nextui-org/card';
import { Image as ImageUI } from '@nextui-org/image';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import HeadingText from '../Text/HeadingText';

const SectionTwo = () => {
  const controls = useAnimation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll();

  const gap = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    isMobile ? ['0px', '22px', '32px', '42px'] : ['0px', '2px', '12px', '32px']
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      className="relative z-10 flex flex-col justify-center gap-8 py-12 sm:p-16"
    >
      <header>
        <div className="mx-auto flex w-full flex-col items-center justify-center 2xl:max-w-screen-xl">
          <div className="mb-12 flex-col items-center">
            <HeadingText
              variant="h1"
              classes="bg-clip-text sm:text-center tracking-tight text-4xl font-bold text-white"
            >
              Powerful Link Shortening{' '}
              <p className="bg-blue-gradient bg-clip-text font-black leading-snug text-transparent">
                Features Two
              </p>{' '}
            </HeadingText>
            <p className="my-2 block w-full max-w-full text-lg font-normal text-primary sm:text-center lg:text-xl">
              Helping people create fastest link
            </p>
          </div>
          <motion.div
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{ gap }}
            className="z-20 grid max-w-[900px] grid-cols-12 grid-rows-1 px-12 sm:mt-2 sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12"
            animate={controls}
          >
            <Card className="col-span-12 h-[300px] w-full sm:col-span-4">
              <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                <p className="text-tiny font-bold uppercase text-white/60">
                  Click Tracking
                </p>
                <h4 className="text-large font-medium text-white">
                  Track the number of clicks each shortened URL receives.
                </h4>
              </CardHeader>
              <ImageUI
                removeWrapper
                alt="Card background"
                className="z-0 size-full object-cover"
                src="./auto.png"
              />
            </Card>

            <Card className="col-span-12 h-[300px] w-full sm:col-span-4">
              <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                <p className="text-tiny font-bold uppercase text-white/60">
                  Link Scheduling
                </p>
                <h4 className="text-large font-medium text-white">
                  Control when your links are active. Schedule links to go live
                  at specific times
                </h4>
              </CardHeader>
              <ImageUI
                removeWrapper
                alt="Card background"
                className="z-0 size-full object-cover"
                src="/scheduler.png"
              />
            </Card>

            <Card className="col-span-12 h-[300px] w-full sm:col-span-4">
              <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                <p className="text-tiny font-bold uppercase text-white/60">
                  Password Protection
                </p>
                <h4 className="text-large font-medium text-white">
                  Secure your links with password protection.
                </h4>
              </CardHeader>
              <ImageUI
                removeWrapper
                alt="Card background"
                className="z-0 size-full object-cover"
                src="/security.png"
              />
            </Card>

            <Card
              isFooterBlurred
              radius="md"
              className="col-span-12 h-[300px] w-full rounded-all-14 sm:col-span-5"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-start">
                <p className="text-tiny font-bold uppercase text-white/60">
                  Expiring Links
                </p>
              </CardHeader>
              <ImageUI
                removeWrapper
                alt="Card example background"
                className="z-0 size-full -translate-y-6 scale-125 object-cover"
                src="/expiring.png"
              />
              <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                <div>
                  <p className="text-tiny text-black">Available soon.</p>
                  <p className="text-tiny text-black">Get notified.</p>
                </div>
                <Button color="primary" radius="full" size="sm">
                  Notify Me
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full sm:col-span-7"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-start">
                <p className="text-tiny font-bold uppercase text-white/60">
                  QR Code Generation
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  Instantly generate QR codes for your shortened URLs.
                </h4>
              </CardHeader>
              <ImageUI
                removeWrapper
                alt="Relaxing app background"
                className="z-0 size-full object-cover"
                src="/qr.png"
              />
            </Card>
          </motion.div>
        </div>
      </header>
    </motion.article>
  );
};

export default SectionTwo;
