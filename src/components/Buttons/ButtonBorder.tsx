import React, { type SVGProps } from 'react';
import type { IconType } from 'react-icons';
import { ImSpinner2 } from 'react-icons/im';

import { cn } from '@/libs/cn';

type ButtonBorderProps = {
  icon?: React.FC<SVGProps<SVGSVGElement>> | IconType;
  iconClassName?: string;
  isLoading?: boolean;
  children?: React.ReactNode;
  text?: string;
} & React.ComponentPropsWithRef<'button'>;

const ButtonBorder = React.forwardRef<HTMLButtonElement, ButtonBorderProps>(
  (
    {
      className,
      disabled: buttonDisabled,
      isLoading,
      icon: Icon,
      iconClassName,
      text,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;
    return (
      <button
        className={cn(
          'group items-center duration-300 ease-in-out transform hover:scale-105 rounded-full aurora-button text-rusty-200 hover:bg-black bg-transparent transition-colors justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 shadow-md flex relative overflow-hidden border border-white/10 gap-2 h-[42px]',
          'px-2 py-2 text-sm',
          'md:px-6 md:py-3 md:text-base',
          'lg:px-6 lg:py-4 lg:text-lg',
          className,
          {
            'cursor-not-allowed': disabled,
            'animate-shimmer': !disabled,
          }
        )}
        disabled={disabled}
        ref={ref}
        type="button"
        {...rest}
      >
        {isLoading && (
          <div
            className={cn(
              {
                'text-black': ['light'],
              },
              'disabled:cursor-not-allowed',
              isLoading &&
                'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
              className
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}

        {text}
        {Icon && (
          <Icon
            className={cn(
              iconClassName,
              'transition-transform group-hover:-rotate-45 group-active:-rotate-12'
            )}
          />
        )}
      </button>
    );
  }
);

ButtonBorder.displayName = 'ButtonBorder';

export default ButtonBorder;
