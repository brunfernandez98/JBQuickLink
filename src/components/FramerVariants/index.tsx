const FadeDownVariant = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

const HeaderAuthVariants = {
  hidden: { y: -100, opacity: 0, filter: 'blur(20px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
};

export { FadeDownVariant, HeaderAuthVariants };
