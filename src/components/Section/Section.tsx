import React from 'react';

type SectionProps = {
  children?: React.ReactNode;
  classes?: string;
  first?: boolean;
  id?: string;
  maxScreenWidth?: 'sm' | 'md' | 'lg' | 'xl';
};

const maxScreenWidthVariants = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
};

const Section = ({
  children,
  classes = '',
  first = false,
  id = undefined,
  maxScreenWidth = 'xl',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`px-4 py-20 sm:px-8 lg:py-32 ${
        first ? 'pt-6 sm:pt-8 md:pt-10 lg:pt-14' : ''
      } ${classes}`}
    >
      <div className={`mx-auto ${maxScreenWidthVariants[maxScreenWidth]}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
