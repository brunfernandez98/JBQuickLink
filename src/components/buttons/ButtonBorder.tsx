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
          'items-center text-gray-400 justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 bg-gray-100 shadow-sm dark:text-gray-50 px-4 py-2 font-semibold tracking-tight flex relative rounded-lg overflow-hidden backdrop-blur-sm filter bg-white/5 hover:bg-white/10 border border-white/10 gap-2 text-base h-[42px]',
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
        {Icon && <Icon className={cn(iconClassName)} />}
      </button>
    );
  }
);

ButtonBorder.displayName = 'ButtonBorder';

export default ButtonBorder;
