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
    <section className="h-auto w-full" id={id}>
      <div
        className={`relative px-4  ${
          first ? 'pt-6 sm:pt-8 md:pt-10 lg:pt-14' : ''
        } ${classes}`}
      >
        <div
          className={`relative z-10 mx-auto ${maxScreenWidthVariants[maxScreenWidth]}`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
