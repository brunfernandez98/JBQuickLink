const animationVariants = {
  fadeDown: {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' } },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' } },
  },
};

const generalVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const headerAuthVariants = {
  hidden: { y: -100, opacity: 0, filter: 'blur(20px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

export { animationVariants, generalVariants, headerAuthVariants };
